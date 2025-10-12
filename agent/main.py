from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Python Agent Service is running!"}
