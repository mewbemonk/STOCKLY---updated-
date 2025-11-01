import React, { useEffect, useRef, memo } from "react";

function Stock() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = ""; // Clear previous widget

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval: "D",
      locale: "en",
      save_image: true,
      style: "1",
      symbol: "NASDAQ:AAPL", // You can replace this with dynamic symbol if needed
      theme: "dark",
      timezone: "Etc/UTC",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: [],
      autosize: true,
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 p-6 bg-[#0F0F0F] rounded-xl shadow-md mt-32">
      <h1 className="text-3xl font-bold text-center text-white">Live Advanced Stock Chart</h1>

      <div ref={container} className="h-[500px] w-full" />

      <div className="text-center text-sm text-slate-400 pt-2">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          AAPL stock chart
        </a>
        <span className="ml-1">by TradingView</span>
      </div>
    </div>
  );
}

export default memo(Stock);