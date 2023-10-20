from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from config.database import engine, Base
from routers.user_router import user_router
app = FastAPI()
app.title = 'Recicla_ando'
app.version = '0.0.1'

app.include_router(user_router, tags=['user'])

Base.metadata.create_all(bind=engine)

@app.get('/', tags=['home'])
def message():
    return HTMLResponse('<h1> Hola soy un aguacate </h1>')