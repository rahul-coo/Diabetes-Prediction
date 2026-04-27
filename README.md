# 🩺 DiaPredict AI: Diabetes Prediction Dashboard

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)

DiaPredict AI is a comprehensive, full-stack machine learning application designed to predict the likelihood of diabetes based on several vital health metrics. It integrates a responsive, modern React frontend with a robust, high-performance FastAPI machine learning backend.

## ✨ Features

- **Real-Time ML Predictions:** Submit patient data through a beautiful, intuitive interface and instantly receive predictions powered by a trained Scikit-Learn model.
- **Interactive Dashboard:** Visualize historical predictions and health parameter trends utilizing stunning, responsive charts powered by `recharts`.
- **Modern User Interface:** Fully styled with Tailwind CSS, offering a polished, premium aesthetic with smooth micro-animations, glassmorphism, and responsive layouts.
- **Form Validation:** Client-side validation ensuring robust data integrity using `react-hook-form`.
- **Fast Backend Server:** High-speed API built with FastAPI and Uvicorn, delivering near-instant predictions.
- **Effortless Startup:** Run the entire full-stack application (both backend and frontend) using a single shell script!

## 🏗️ Architecture

The application is split into two primary layers:

1. **Machine Learning API (Backend)**
   - Built with Python and **FastAPI**.
   - Uses a pre-trained scikit-learn model (`model.pkl`) and a standard scaler (`scaler.pkl`) to normalize input data before predicting.
   - Provides a RESTful `/predict` endpoint returning JSON predictions and confidence probabilities.

2. **Web Dashboard (Frontend)**
   - Built with **React 19** and **Vite**.
   - Features client-side routing (`react-router-dom`) for seamless navigation between the Landing Page, Login, Sign Up, and Main Dashboard.
   - Designed iteratively with a design system for premium visual excellence.

## 🚀 Getting Started

### Prerequisites

- **Python 3.8+**
- **Node.js 18+** & **npm**

### Quick Start (Recommended)

You can launch both the ML backend and the React frontend simultaneously using the provided startup script:

```bash
# Make the script executable
chmod +x start_app.sh

# Run the app
./start_app.sh
```

- The **React Dashboard** will be live at: [http://localhost:5174](http://localhost:5174)
- The **FastAPI Docs** will be live at: [http://localhost:8000/docs](http://localhost:8000/docs)

### Manual Setup

If you prefer to start the servers individually:

#### 1. Start the Machine Learning Backend

```bash
# Create a virtual environment (optional but recommended)
python -m venv .venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate

# Install requirements
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

#### 2. Start the React Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

## 📊 The Machine Learning Model

The core prediction mechanism relies on a classification model trained on 8 primary clinical features:
1. **Pregnancies**
2. **Glucose Level**
3. **Blood Pressure**
4. **Skin Thickness**
5. **Insulin Level**
6. **BMI**
7. **Diabetes Pedigree Function**
8. **Age**

You can retrain the model at any time by running:
```bash
python train_model.py
```
This script will output updated `model.pkl` and `scaler.pkl` artifacts used by the FastAPI server.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/rahul-coo/Diabetes-Prediction/issues) if you want to contribute.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
