import React, { useEffect, useRef, memo } from "react";

function TopGainers() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      exchange: "US",
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "#DBDBDB",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      width: "100%",
      height: "100%",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-6 bg-[#0F0F0F] rounded-xl shadow-md mt-20">
      <h1 className="text-3xl font-bold text-center text-white">
        Stock Market
      </h1>
      <p className="font-bold text-center text-white">
        See the top five gaining, losing, and most active stocks for the day. It
        updates based on current market activity – so you'll always see the most
        relevant stocks.
      </p>

      <div ref={container} className="h-[600px] w-full" />

      <div className="text-center text-sm text-slate-400 pt-2">
        <a
          href="https://www.tradingview.com/markets/stocks-usa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Stocks today
        </a>
        <span className="ml-1">by TradingView</span>
      </div>
    </div>
  );
}

export default memo(TopGainers);
