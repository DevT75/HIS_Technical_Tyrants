from fastapi import FastAPI,File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import get_file
from tensorflow.keras.utils import load_img
from tensorflow.keras.utils import img_to_array
from tensorflow import expand_dims
from tensorflow.nn import softmax
from numpy import argmax
from PIL import Image
from numpy import max
from numpy import array
from json import dumps
from uvicorn import run
import os
import io

app = FastAPI()
model_dir = "./real_vs_fake.h5"
# model = load_model(model_dir)



origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Food Vision API!"}

@app.post("/upload")
async def receiveFiles(file: bytes = File(...)):
    image = Image.open(io.BytesIO(file))
    image.show()
    # print()
    return { "uploadStatus" : model.predict(image) }
    # print(file)


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8000))
    run(app, host="0.0.0.0", port=port)