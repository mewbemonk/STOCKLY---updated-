from flask import Flask, request, jsonify
import joblib
import numpy as np
from tensorflow.keras.models import load_model
from flask_cors import CORS




app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    ticker = data["ticker"]
    days = data["days"]

    model = load_model("lstm_forecast.h5")
    scaler = joblib.load("scaler.pkl")

    # Pull data, scale, forecast...
    return jsonify({"forecast": [...], "trend": "📈 Uptrend"})