@echo off
cd "C:\Users\Risha\OneDrive\Documents\OneDrive\Desktop\a\testingg"
call venv\Scripts\activate
python train_sp500_lstm.py >> retrain_log.txt 2>&1