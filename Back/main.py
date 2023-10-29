from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from config.database import engine, Base
from routers.user_router import user_router
from routers.blog_router import blog_router
from routers.prize_router import prize_router
from routers.movement_router import movement_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.title = 'Recicla_ando'
app.version = '0.0.1'

app.include_router(user_router, tags=['user'])
app.include_router(movement_router, tags=['movement'])
app.include_router(blog_router, tags=['blog'])
app.include_router(prize_router, tags=['prize'])

Base.metadata.create_all(bind=engine)

# Origins admited
origins = ["*"]
# Add Middleware CORS (Cross-Origin Resource Sharing )
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.get('/', tags=['home'])
def message():
    return HTMLResponse('<h1> \U0001F648 Hola soy un aguacate \U0001F951 </h1>')
    