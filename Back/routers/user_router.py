from fastapi import APIRouter
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import CreateUser, LoginUser


user_router = APIRouter()

@user_router.post('/create_user', tags=['users'],status_code=201, response_model=dict)
def create_user(user: CreateUser) -> dict:
    db =  Session()
    new_user = User(**user.model_dump())
    db.add(new_user)
    db.commit()
    return JSONResponse(status_code=201, content={'message':'Registro exitoso'})



