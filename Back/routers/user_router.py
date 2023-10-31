from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import *
from services.user_service import UserService
from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import List
import json

user_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

#todo Metodos POST
@user_router.post('/create_user', status_code=201, response_model=CreateUser)
def create_user(user: CreateUser) -> CreateUserOut:
    db =  Session()
    data = UserService(db).post_register_user(user)
    if not data:
        return JSONResponse(status_code=201, content={'message':'Usuario teregistrado'})
    content = {
        'message':'Registro exitoso',
        'data' : jsonable_encoder(data)
    }
    return JSONResponse(status_code=201, content=content)

@user_router.post('/login', status_code=200, response_model= LoginUserOut)
def login(user: LoginUser) -> dict:
    try:
        db = Session()
        data = UserService(db).post_login_user(user.email, user.password)
        if data:
            return data
        return JSONResponse(status_code=418, content={"message": "El servidor se rehusa a preparar café porque es una tetera"})
    except Exception as e:
        return JSONResponse(status_code=500, content={f"message": "Server Error: {e}"})

#todo Metodos GET
@user_router.get('/users_active',response_model=List[UserGetAll],status_code=200)
def list_users_active() -> List[UserGetAll]:
    db = Session()
    users = UserService(db).get_user_all_active()
    return JSONResponse(status_code=200, content=jsonable_encoder(users))

@user_router.get('/users_all',response_model=List[UserGetAll],status_code=200)
def list_users_all() -> List[UserGetAll]:
    db = Session()
    users = UserService(db).get_user_all()
    return JSONResponse(status_code=200, content=jsonable_encoder(users))
    
    
@user_router.get('/users/{id}',status_code=200, response_model=UserForId)
def get_user_id(id:int):
    db = Session()
    user = UserService(db).get_user_for_id(id)
    return JSONResponse(status_code=200,content=jsonable_encoder(user))

#todo Metodos PUT
@user_router.put('/user/update_profile/{id}', status_code=201, response_model=dict)
def update_user(id:int, user: UpdateInfoUser):
    db = Session()
    result = UserService(db).put_user_update(id,user)
    if not result:
        return JSONResponse(status_code=404, content={'message':'Usuario no encontrado'})
    return JSONResponse(status_code=201, content={'message':'La información del usuario ha sido actualizada'})

@user_router.put('/user/change_password/{id}', status_code=201, response_model=dict)
def change_password(id:int, user:ChangeUserPassword):
    db = Session()
    result = UserService(db).put_change_password(id, user)
    if not result:
        return JSONResponse(status_code=404, content={'message':'Usuario no encontrado'})
    return JSONResponse(status_code=201, content={'message' : 'Contraseña ha sido actualizada'})

@user_router.put('/user/deactivate/{id}', status_code=201, response_model=dict)
def deactivate_user(id:int):
    db = Session()
    result =UserService(db).put_deactivate_user(id)
    if not result:
        return JSONResponse(status_code=404, content={'message':'Usuario no encontrado'})
    return JSONResponse(content={'message' : 'Usuario ha sido desactivado'})


# @user_router.get('/login', status_code=201)
# def user(token: str = Depends(oauth2_scheme)):
#     return 'hola'

# @user_router.post('/token', status_code=201)
# def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     print(form_data.username, form_data.password)
#     return 'ok'

# newUserDict = jsonable_encoder(CreateUserOut(**jsonable_encoder(newUser)))
