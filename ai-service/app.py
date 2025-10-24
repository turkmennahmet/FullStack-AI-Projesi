from fastapi import FastAPI
from pydantic import BaseModel
from gradio_client import Client
import uvicorn

app = FastAPI()
hf_client = Client("turkmennahmet/fullstack-ai")

class Message(BaseModel):
    text: str

@app.post("/predict")
def predict_sentiment(msg: Message):
    result = hf_client.predict(text=msg.text, api_name="/predict")
    return {"sentiment": result}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
