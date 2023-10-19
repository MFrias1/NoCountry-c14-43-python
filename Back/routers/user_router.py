from fastapi import APIRouter
from fastapi.responses import JSONResponse
from config.database import Session
from models.user_model import User
from schemas.user_schema import CreateUser, CreateUserOut, LoginUser
from services.user_service import UserService
import json
from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm


user_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@user_router.post('/create_user', status_code=201, response_model=CreateUserOut)
def create_user(user: CreateUser) -> CreateUserOut:
    db =  Session()
    data = UserService(db).post_register_user(user)
    content = {
        'message':'Registro exitoso',
        'data' : data
    }
    return JSONResponse(status_code=201, content=content)

@user_router.post('/login', status_code=200, response_model= dict)
def login(user: LoginUser) -> dict:
    db = Session()
    data = UserService(db).post_login_user(user.email, user.password)
    if not data:
        return JSONResponse(status_code=418, content={"message": "El servidor se rehusa a preparar café porque es una tetera"})
    return JSONResponse(status_code=200, content={"message":"Ha iniciado sesión correctamente."})


    



# @user_router.get('/login', status_code=201)
# def user(token: str = Depends(oauth2_scheme)):
#     return 'hola'

# @user_router.post('/token', status_code=201)
# def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     print(form_data.username, form_data.password)
#     return 'ok'

# newUserDict = jsonable_encoder(CreateUserOut(**jsonable_encoder(newUser)))