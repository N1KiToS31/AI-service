from fastapi import FastAPI

app = FastAPI(title="Math Engine")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/")
def root():
    return {"message": "Math engine is running"}