from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import joblib
import os

app = FastAPI(title="Diabetes Prediction API")

# Setup CORS as dictated in the SOP
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load artifacts
scaler = None
model = None

@app.on_event("startup")
def load_artifacts():
    global scaler, model
    if os.path.exists("scaler.pkl") and os.path.exists("model.pkl"):
        scaler = joblib.load("scaler.pkl")
        model = joblib.load("model.pkl")
        print("Model and Scaler loaded successfully.")
    else:
        print("WARNING: Model or scaler not found. Please run train_model.py first.")

class PatientData(BaseModel):
    Pregnancies: int = Field(..., ge=0, le=20)
    Glucose: float = Field(..., ge=1, le=300)
    BloodPressure: float = Field(..., ge=1, le=200)
    SkinThickness: float = Field(..., ge=0, le=100)
    Insulin: float = Field(..., ge=0, le=900)
    BMI: float = Field(..., ge=1, le=70)
    DiabetesPedigreeFunction: float = Field(..., ge=0, le=2.5)
    Age: int = Field(..., ge=1, le=120)

@app.get("/health")
def health_check():
    """Health endpoint to ensure the API is running correctly"""
    return {
        "status": "ok", 
        "model_loaded": model is not None,
        "scaler_loaded": scaler is not None
    }

@app.post("/predict")
def predict_diabetes(data: PatientData):
    if model is None or scaler is None:
        raise HTTPException(status_code=500, detail="Models are not loaded on the server.")

    # Prepare features vector for prediction (must match training feature order exactly)
    features = [[
        data.Pregnancies,
        data.Glucose,
        data.BloodPressure,
        data.SkinThickness,
        data.Insulin,
        data.BMI,
        data.DiabetesPedigreeFunction,
        data.Age
    ]]
    
    # Scale features
    # StandardScaler expects 2D array and returns 2D array
    features_scaled = scaler.transform(features)
    
    # Predict
    result = int(model.predict(features_scaled)[0])
    # Probability returns a list of lists [[prob0, prob1]]
    prob = float(model.predict_proba(features_scaled)[0][result])

    return {"result": result, "probability": prob}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
