# 📈 STOCKLY – Track, Compare & Predict Stocks

Welcome to **STOCKLY**, a full-stack MERN + ML-powered platform where users can:
- 🔍 View current stock prices
- 📊 Compare multiple stocks
- 📰 Read daily stock news
- 🔐 Register/Login securely
- 🤖 Predict future prices for 4 stocks using an ML model (15-day forecast)

---

## 🚀 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT + bcrypt
- **ML Model**: Streamlit (deployed on Streamlit Cloud)
- **Deployment**: Vercel (React) + Streamlit Cloud (ML)

---

## 🔧 Features

- ✅ Real-time stock price tracking
- 📈 Top gainers & losers
- 📰 Daily news feed
- 🔐 User authentication (Sign up / Login)
- 🤖 ML model predicts next 15 days for 4 stocks
- 🔗 Embedded Streamlit forecast via iframe

---

## 📂 Folder Structure
STOCKLY/
│
├── Dashboard/              # Optional admin or analytics dashboard (React or template-based)
│   └── components/         # Reusable UI widgets (charts, tables, etc.)
│   └── pages/              # Dashboard views (e.g., user stats, stock trends)
│
├── frontend/               # React frontend
│   └── public/             # Static assets (favicon, index.html)
│   └── src/
│       ├── components/     # Reusable UI components (Navbar, Card, etc.)
│       ├── pages/          # Main views (Home, Compare, News, Login)
│       ├── services/       # API calls (e.g., fetch stock data, auth)
│       ├── utils/          # Helper functions (formatting, validation)
│       └── App.js          # Main app entry
│
├── Backend/                # Express backend
│   └── controllers/        # Route logic (auth, stocks, news)
│   └── models/             # Mongoose schemas (User, Stock)
│   └── routes/             # API endpoints
│   └── middleware/         # Auth, error handling
│   └── config/             # DB connection, environment setup
│   └── server.js           # Entry point
│
├── ML_model/               # Streamlit ML app
│   └── model/              # Trained model files (.pkl, .joblib)
│   └── utils/              # Preprocessing, prediction logic
│   └── app.py              # Streamlit app entry
│   └── requirements.txt    # Python dependencies
│
└── README.md               # Project overview and setup






---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/stockverse.git
cd STOCKLY


# Frontend Setup
cd Frontend
npm install        # Installs React, Vite, and plugins
npm run dev        # Starts the frontend dev server at localhost:5173

# Backend Setup
cd ../Backend
npm install        # Installs Express and other backend dependencies
npm start          # Or: node server.js (depending on your setup)





REACT_APP_STREAMLIT_URL=https://stock-price-prediction-gru.streamlit.app/?embed=true
