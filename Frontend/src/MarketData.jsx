import React, { useEffect, useRef, memo } from 'react';

function MarketData() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      backgroundColor: "#0F0F0F",
      support_host: "https://www.tradingview.com",
      width: "100%",
      height: "100%",
      symbolsGroups: [
        {
          name: "Indices",
          symbols: [
            { name: "FOREXCOM:SPXUSD", displayName: "S&P 500 Index" },
            { name: "NASDAQ:AAPL", displayName: "" },
            { name: "NASDAQ:GOOGL", displayName: "" },
            { name: "NASDAQ:TSLA", displayName: "" },
            { name: "NSE:RELIANCE", displayName: "" },
            { name: "NSE:INFY", displayName: "" },
          ],
        },
        {
          name: "Futures",
          symbols: [
            { name: "BMFBOVESPA:ISP1!", displayName: "S&P 500" },
            { name: "BMFBOVESPA:EUR1!", displayName: "Euro" },
            { name: "CMCMARKETS:GOLD", displayName: "Gold" },
            { name: "PYTH:WTI3!", displayName: "WTI Crude Oil" },
            { name: "BMFBOVESPA:CCM1!", displayName: "Corn" },
          ],
        },
        {
          name: "Bonds",
          symbols: [
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
          ],
        },
      ],
    });

    container.current.appendChild(script);
  }, []);

  return (
  <div className="w-full max-w-7xl mx-auto space-y-6 p-6 bg-[#0F0F0F] rounded-xl shadow-md mt-20">
    <h1 className="text-3xl font-bold text-center text-white">Live Market Data</h1>

    <div ref={container} className="w-full h-[600px]" />

    <div className="text-center text-sm text-slate-400 pt-2">
      <a
        href="https://www.tradingview.com/markets/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:underline"
      >
        Market summary
      </a>
      <span className="ml-1">by TradingView</span>
    </div>
  </div>
);

}

export default memo(MarketData);