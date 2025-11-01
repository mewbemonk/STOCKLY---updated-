import React, { useEffect, useRef, memo } from "react";

function Overview() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = ""; // Clear previous widget

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      lineWidth: 2,
      lineType: 0,
      chartType: "area",
      fontColor: "rgb(106, 109, 120)",
      gridLineColor: "rgba(242, 242, 242, 0.06)",
      volumeUpColor: "rgba(34, 171, 148, 0.5)",
      volumeDownColor: "rgba(247, 82, 95, 0.5)",
      backgroundColor: "#0F0F0F",
      widgetFontColor: "#DBDBDB",
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      chartOnly: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      valuesTracking: "1",
      changeMode: "price-and-percent",
      symbols: [
        ["Apple", "NASDAQ:AAPL|1D"],
        ["Google", "NASDAQ:GOOGL|1D"],
        ["Microsoft", "NASDAQ:MSFT|1D"],
      ],
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      fontSize: "10",
      headerFontSize: "medium",
      autosize: true,
      width: "100%",
      height: "100%",
      noTimeScale: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 p-6 bg-[#0F0F0F] rounded-xl shadow-md mt-20">
      <h1 className="text-3xl font-bold text-center text-white">Live Stock Chart Overview</h1>

      <div ref={container} className="h-[500px] w-full" />

      <div className="text-center text-sm text-slate-400 pt-2">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Apple
        </a>
        <span className="mx-1">,</span>
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-GOOGL/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Google
        </a>
        <span className="mx-1">,</span>
        <span>and</span>
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-MSFT/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline ml-1"
        >
          Microsoft stock price
        </a>
        <span className="ml-1">by TradingView</span>
      </div>
    </div>
  );
}

export default memo(Overview);