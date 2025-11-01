import React, { useEffect, useRef, memo } from "react";
import TopGainers from "./TopGainers";
import MarketData from "./MarketData";

function News() {
  const container = useRef();

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = ""; // Clear previous widget

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      displayMode: "regular",
      feedMode: "all_symbols",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      width: "100%", // ✅ Full width
      height: "100%", // ✅ Full height
    });

    container.current.appendChild(script);
  }, []);

  return (
    <>

      <div className="w-full max-w-7xl mx-auto space-y-6 p-6 bg-[#0F0F0F] rounded-xl shadow-md mt-20">
        <h1 className="text-3xl font-bold text-white text-center">
          Top Market Stories
        </h1>
        <p className="text-sm text-slate-400 text-center max-w-3xl mx-auto">
          Stay updated with the latest crypto and stock market headlines —
          curated for quick reads and smart decisions.
        </p>

        <div ref={container} className="h-[550px] w-full" />
      </div>

      <TopGainers />
      <MarketData />
    </>
  );
}

export default memo(News);
