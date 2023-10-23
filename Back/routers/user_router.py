from fastapi import APIRouter
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import CreateUser, CreateUserOut, LoginUser, UserGetAll, UserForId, UpdateInfoUser
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
        'data' : data
    }
    return JSONResponse(status_code=201, content=content)

@user_router.post('/login', status_code=200, response_model= dict)
def login(user: LoginUser) -> dict:
    db = Session()
    data = UserService(db).post_login_user(user.email, user.password)
    content = {
        'message':'Ha iniciado sesión correctamente',
        'data' : data
    }
    if not data:
        return JSONResponse(status_code=418, content={"message": "El servidor se rehusa a preparar café porque es una tetera"})
    return JSONResponse(status_code=200, content=content)

#todo Metodos GET
@user_router.get('/users',response_model=List[UserGetAll],status_code=200)
def list_users() -> List[UserGetAll]:
    db = Session()
    users = UserService(db).get_user_all()
    return JSONResponse(status_code=200, content=users)
    
@user_router.get('/users/{id}',status_code=200, response_model=UserForId)
def get_user_id(id:int):
    db = Session()
    user = UserService(db).get_user_for_id(id)
    return JSONResponse(status_code=200,content=user)

#todo Metodos PUT
@user_router.put('/user/update_profile{id}', status_code=201, response_model=dict)
def update_user(id:int, user: UpdateInfoUser):
    db = Session()
    result = UserService(db).put_user_update(id,user)
    if not result:
        return JSONResponse(status_code=404, content={'message':'Usuario no encontrado'})
    return JSONResponse(status_code=200, content={'message':'La información del usuario ha sido actualizada'})

#! Crear ruta cambiar contrasena
#! Crear ruta eliminar usuario
# @user_router.get('/login', status_code=201)
# def user(token: str = Depends(oauth2_scheme)):
#     return 'hola'

# @user_router.post('/token', status_code=201)
# def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     print(form_data.username, form_data.password)
#     return 'ok'

# newUserDict = jsonable_encoder(CreateUserOut(**jsonable_encoder(newUser)))
