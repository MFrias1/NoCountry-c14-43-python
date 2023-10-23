from fastapi import APIRouter
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from config.database import Session
from models.movement_model import Movement 
from schemas.movement_schema import MovementGetAll
from services.movement_service import MovementService
import json
from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import List

movement_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@movement_router.get('/movement')
def get_moves_all(movement:MovementGetAll):
    db = Session()
    result = MovementService(db).get_movement_all()
    return result
