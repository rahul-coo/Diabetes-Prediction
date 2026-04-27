#!/bin/bash

# ==========================================
# DiaPredict AI Starter Script
# Runs both ML Backend and React Frontend
# ==========================================

echo "Starting Python FastAPI Backend ML Server on Port 8000..."
source .venv/bin/activate
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

sleep 2 # Let the backend spin up

echo "Starting Vite React Server..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd frontend
npm run dev -- --port 5174 &
FRONTEND_PID=$!

echo ""
echo "=========================================================="
echo "✨ DiaPredict AI is fully online and running! ✨"
echo ""
echo "🟢 USER DASHBOARD : http://localhost:5174"
echo "💻 AI ML BACKEND  : http://localhost:8000/docs"
echo ""
echo "Press [Ctrl+C] at any time to softly shut down both servers."
echo "=========================================================="

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT
wait $FRONTEND_PID $BACKEND_PID
