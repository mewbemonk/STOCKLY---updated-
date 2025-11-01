import streamlit as st
import numpy as np
import pandas as pd
import yfinance as yf
import joblib
import matplotlib.pyplot as plt
from tensorflow.keras.models import load_model

# 🏷️ Title
st.title("📈 Stock Forecast [LSTM]")
st.markdown("")

# 🎛️ Sidebar: Stock and Forecast Horizon
st.sidebar.title("📊 Stock Forecaster")
selected_stock = st.sidebar.selectbox("Choose a stock", ["S&P 500", "Apple", "Tesla", "Reliance (NSE)", "Infosys (NSE)"])
forecast_days = st.sidebar.slider("Forecast Horizon (days)", 5, 15, value=10)

# 🔗 Ticker map
stock_map = {
    "S&P 500": "^GSPC",
    "Apple": "AAPL",
    "Tesla": "TSLA",
    "Reliance (NSE)": "RELIANCE.NS",
    "Infosys (NSE)": "INFY.NS"
}
ticker = stock_map[selected_stock]

# 📦 Load model and scaler
model = load_model("lstm_forecast.h5")
scaler = joblib.load("scaler.jb")

# 📥 Load and scale data
df = yf.Ticker(ticker).history(start='1990-01-01')
df.drop(columns=['Stock Splits', 'Dividends'], inplace=True)
scaled = scaler.transform(df['Close'].values.reshape(-1, 1))

# 🧪 Prepare test sequences
seq_len = 60
test_data = scaled[int(len(scaled) * 0.8):]
x_test = np.array([test_data[i - seq_len:i, 0] for i in range(seq_len, len(test_data))])
x_test = x_test.reshape(-1, seq_len, 1)

# 🔍 Predict last 60 days
pred = model.predict(x_test)
actual = scaler.inverse_transform(test_data[seq_len:])
pred_actual = scaler.inverse_transform(pred)

# 🔮 Forecast next N days
future_scaled = []
current_seq = x_test[-1]
for _ in range(forecast_days):
    next_val = model.predict(current_seq.reshape(1, seq_len, 1))[0][0]
    future_scaled.append(next_val)
    current_seq = np.append(current_seq[1:], [[next_val]], axis=0)
future_actual = scaler.inverse_transform(np.array(future_scaled).reshape(-1, 1))

# 📈 Plot actual vs predicted + forecast
st.markdown("---")
st.subheader(f"{selected_stock}: Last 60-Day Prediction + Next {forecast_days}-Day Forecast (LSTM)")
st.markdown("")
plt.figure(figsize=(10, 5))
plt.plot(range(60), actual[-60:], label="Actual", color="blue", marker='o')
plt.plot(range(60 + forecast_days), np.concatenate((pred_actual[-60:], future_actual)),
         label="LSTM Prediction + Forecast", color="orange", marker='o')
plt.xlabel("Day Index")
plt.ylabel("Close Price")
plt.legend()
st.pyplot(plt)

# 🔮 Forecasted Prices
st.markdown("---")
st.markdown("### 🔮 Next Forecasted Closing Prices")
st.markdown("")
for i, price in enumerate(future_actual.flatten(), 1):
    st.write(f"Day {i}: ₹{price:.2f}")

# 📊 Detect trend from forecast
def detect_trend(prices):
    diffs = np.diff(prices.flatten())
    avg_change = np.mean(diffs)
    if avg_change > 0.5:
        return "📈 Uptrend", avg_change
    elif avg_change < -0.5:
        return "📉 Downtrend", avg_change
    else:
        return "➖ Sideways", avg_change

trend_label, avg_daily_change = detect_trend(future_actual)

# 📊 Show trend summary
st.markdown("---")
st.markdown("### 📊 Forecast Trend Summary")
st.markdown("")
st.markdown(f"**Trend**: {trend_label}  \n**Average Daily Change**: ₹{avg_daily_change:.2f}")

# 📋 Show last 60-day stock table
st.markdown("---")
st.markdown("### 📋 Last 60 Trading Days (Open, High, Low, Close, Volume)")
st.markdown("")
st.dataframe(df[['Open', 'High', 'Low', 'Close', 'Volume']].tail(60).iloc[::-1])