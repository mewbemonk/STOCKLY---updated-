import { useState } from "react";
import Framer from "../Framer";

const ML = () => {
  const [showStreamlit, setShowStreamlit] = useState(false);

  const handleClick = () => {
    setShowStreamlit(true);
  };

  return (
    <div className="p-8 min-h-screen bg-slate-100 text-slate-800">
      <Framer>
      <h2 className="text-2xl font-bold mb-4">📈 Prediction Portal</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-indigo-600 cursor-pointer text-white rounded hover:bg-indigo-700 transition"
      >
        Show Streamlit Forecast
      </button>
      </Framer>

      {showStreamlit && (
        <div className="mt-8">
          <iframe
            src="https://stock-price-prediction-gru.streamlit.app/?embed=true"
            title="Streamlit Forecast"
            width="100%"
            height="1000px"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ML;