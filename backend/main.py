from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(
    title="JK SemiTech API",
    description="Backend API for JK SemiTech Website",
    version="1.0.0"
)

# CORS Middleware setup
# Allows the React frontend to communicate with the FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development. Update this in production.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/api/status")
async def health_check():
    """
    Sample health-check endpoint to verify the backend is running.
    """
    return {"status": "ok", "message": "Backend is running smoothly!"}

if __name__ == "__main__":
    # Run the server using uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
