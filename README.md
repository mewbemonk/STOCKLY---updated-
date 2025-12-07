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
- **Deployment**: Render: (React) + Streamlit Cloud (ML)

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
├── Backend
    ├── package-lock.json
    ├── package.json
    └── src
    │   ├── db.js
    │   ├── paths
    │       ├── login.js
    │       └── register.js
    │   ├── route.js
    │   ├── schema.js
    │   └── server.js
├── Frontend
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Component
    │   │   ├── Badge.jsx
    │   │   ├── Banner.jsx
    │   │   ├── CTA.jsx
    │   │   ├── Feature.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Framer.jsx
    │   │   ├── Freeze.jsx
    │   │   ├── Hero.jsx
    │   │   ├── MarketData.jsx
    │   │   ├── Nav.jsx
    │   │   ├── Overview.jsx
    │   │   ├── Stock.jsx
    │   │   ├── Testimonial.jsx
    │   │   ├── TickerTape.jsx
    │   │   ├── TopGainers.jsx
    │   │   └── Updates.jsx
    │   ├── index.css
    │   ├── login.css
    │   ├── main.jsx
    │   └── pages
    │   │   ├── Dashboard.jsx
    │   │   ├── Home.jsx
    │   │   ├── Layout.jsx
    │   │   ├── Login.jsx
    │   │   ├── ML.jsx
    │   │   ├── News.jsx
    │   │   └── Register.jsx
    └── vite.config.js
├── ML_model
    ├── README.md
    ├── app.py
    ├── requirements.txt
    └── testing.ipynb
└── README.md






---

## 🛠️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/mewbemonk/STOCKLY---updated-.git
cd STOCKLY


# Frontend Setup
cd Frontend
npm install        # Installs React, Vite, and plugins
npm run dev        # Starts the frontend dev server at localhost:5173

# Backend Setup
cd ../Backend
npm install        # Installs Express and other backend dependencies
node server.js          





REACT_APP_STREAMLIT_URL=https://stock-price-prediction-gru.streamlit.app/?embed=true
