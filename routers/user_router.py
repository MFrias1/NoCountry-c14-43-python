from fastapi import APIRouter
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import CreateUser, CreateUserOut, LoginUser
import json


user_router = APIRouter()

@user_router.post('/create_user', status_code=201, response_model=CreateUserOut)
def create_user(user: CreateUser) -> CreateUserOut:
    db =  Session()
    new_user = User(**user.model_dump())
    db.add(new_user)
    db.commit() 
    db.refresh(new_user) 
    data = new_user.__dict__
    #print(json.dump(data, indent=4))
    data = {key: value for key, value in data.items() if not key.startswith("_") }
    content = {
        'message':'Registro exitoso',
        'data' : data
    }
    return JSONResponse(status_code=201, content=content)



