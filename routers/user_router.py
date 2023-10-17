from fastapi import APIRouter
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import CreateUser, CreateUserOut, LoginUser
from services.user_service import UserService
import json


user_router = APIRouter()

@user_router.post('/create_user', status_code=201, response_model=CreateUserOut)
def create_user(user: CreateUser) -> CreateUserOut:
    db =  Session()
    data = UserService(db).post_register_user(user)
    content = {
        'message':'Registro exitoso',
        'data' : data
    }
    return JSONResponse(status_code=201, content=content)



