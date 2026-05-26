# 📈 Stock Price Prediction App (GRU-Based)

An interactive web application built with **Streamlit** that utilizes a **Gated Recurrent Unit (GRU)** neural network for robust and efficient short-term forecasting of stock closing prices. This tool provides retail investors and analysts with quick, data-driven insights.

---

## ✨ Key Features

* **Production Model:** Uses the **Gated Recurrent Unit (GRU)** model, selected after a rigorous comparison with LSTM due to its superior accuracy and efficiency for this specific task.
* **Interactive Interface:** Allows users to select a stock and set the forecast days (5-15 days) using the sidebar.
* **Diverse Stock Coverage:** Forecasts major global and Indian stocks: **S&P 500 (\^GSPC)**, **Apple (AAPL)**, **Tesla (TSLA)**, **Reliance (RELIANCE.NS)**, and **Infosys (INFY.NS)**.
* **Real-time Data:** Fetches up-to-date historical stock data using the `yfinance` library.
* **Visualization:** Plots the last 60 days of actual vs. predicted prices, seamlessly extended by the future forecast.
* **Trend Detection:** Automatically analyzes the forecast to determine the likely short-term trend: **Uptrend 📈**, **Downtrend 📉**, or **Sideways ➖**.

---

## 🧠 Model Comparison and Rationale

The project involved testing both **LSTM (Long Short-Term Memory)** and **GRU (Gated Recurrent Unit)** models.

* **GRU Selection:** The **GRU model yielded better accuracy (lower loss/MAE)** on the test dataset compared to the LSTM model. Furthermore, GRU has a simpler architecture (two gates instead of three), making it **computationally faster and more efficient** for production deployment without sacrificing predictive power.
* **Architecture:** The final GRU model uses a two-layer stacked structure with a 60-day lookback window.

---

## 🛠️ Project Structure and Files

The application requires the following files to be present in the root directory:

| File | Description |
| :--- | :--- |
| `app.py` | The main Streamlit application script with UI, data fetching, and prediction logic. |
| `gru_model_*.keras` | **Five pre-trained GRU models** (one for each stock). |
| `scaler_*.pkl` | **Five Joblib-saved `MinMaxScaler` objects** (one for each stock) for consistent data scaling. |
| `requirements.txt` | List of all Python dependencies. |

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone [https://github.com/mewbemonk/Stock_Preice_Prediction.git](https://github.com/mewbemonk/Stock_Preice_Prediction.git)
cd Stock_Preice_Prediction



2. Setup and Installation

1.Create and activate a virtual environment (recommended):

python3 -m venv venv
source venv/bin/activate  # macOS/Linux
# OR
# .\venv\Scripts\activate  # Windows (Command Prompt)

2.Install dependencies:
# Ensure this file is created with: streamlit, numpy, pandas, yfinance, joblib, tensorflow, matplotlib
pip install -r requirements.txt


3. Execution
1.Ensure all model and scaler files (gru_model_*.keras and scaler_*.pkl) are in the directory.

2.Run the Streamlit app:
streamlit run app.py

The application will launch automatically in your web browser, typically at http://localhost:8501