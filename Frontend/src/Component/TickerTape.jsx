import React, { useEffect, useRef, memo } from 'react';

function TickerTape() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
        { proName: "NASDAQ:AAPL", title: "" },
        { proName: "NASDAQ:TSLA", title: "" },
        { proName: "OANDA:XAUUSD", title: "" },
        { proName: "NSE:RELIANCE", title: "" },
        { proName: "NSE:INFY", title: "" },
      ],
      colorTheme: "dark",
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      displayMode: "adaptive",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-[#0F0F0F] py-2">
      <div className="max-w-7xl mx-auto px-4" ref={container}>
        <div className="tradingview-widget-container__widget" />
        <div className="text-center text-sm text-slate-400 pt-2">
          <a
            href="https://www.tradingview.com/markets/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Ticker tape
          </a>
          <span className="ml-1">by TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TickerTape);