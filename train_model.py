import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import warnings

warnings.filterwarnings('ignore')

def main():
    print("Downloading dataset...")
    url = "https://raw.githubusercontent.com/npradaschnor/Pima-Indians-Diabetes-Dataset/master/diabetes.csv"
    data = pd.read_csv(url)

    print("Handling missing/zero values...")
    # Features where 0 is invalid
    cols_with_zeros = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    for col in cols_with_zeros:
        data[col] = data[col].replace(0, np.nan)
        # Impute with median
        data[col] = data[col].fillna(data[col].median())

    X = data.drop('Outcome', axis=1)
    y = data['Outcome']

    print("Splitting dataset...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Scaling features...")
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    print("Training Random Forest model...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train_scaled, y_train)

    y_pred = model.predict(X_test_scaled)
    acc = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy on Test Set: {acc*100:.2f}%")

    print("Saving model and scaler...")
    joblib.dump(scaler, 'scaler.pkl')
    joblib.dump(model, 'model.pkl')
    print("Training process complete!")

if __name__ == "__main__":
    main()
