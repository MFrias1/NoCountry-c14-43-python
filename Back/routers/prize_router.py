from fastapi import APIRouter
from config.database import Session
from schemas.prize_schema import CreatePrize
from fastapi.security import OAuth2PasswordBearer
from typing import List
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from services.prize_service import PrizeService
from schemas.prize_schema import *



prize_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@prize_router.post('/create_prize', status_code=201, response_model=CreatePrize)
def create_prize(create_prize: CreatePrize):
    db = Session()
    data = PrizeService(db).create_prize(create_prize)
    if not data:
        return JSONResponse(status_code=404, content={'message':'premio no creado'})
    content={'message':'premio creado con exito',
             'data':jsonable_encoder(data)}
    
    return JSONResponse(status_code=201, content=content)

@prize_router.get('/prize_all', response_model=List[CreatePrize], status_code=201)
def list_prize() ->List[CreatePrize]:
    db = Session()
    prize = PrizeService(db).prize_get_all()
    return JSONResponse(status_code=200, content=jsonable_encoder(prize))

@prize_router.get('/prize/active', response_model=List[CreatePrize], status_code=201)
def list_active_prizes():
    db = Session()
    active_prizes = PrizeService(db).get_active_prizes()
    return JSONResponse(status_code=201, content=jsonable_encoder(active_prizes))

@prize_router.put('/prize/update_prize/{id}', status_code=201, response_model=dict)
def update_posts(id:int,prizes:CreatePrize):
    db = Session()
    result = PrizeService(db).prize_update(id, prizes)
    if not result:
        return JSONResponse(status_code=404, content={'message':'premio no encontrado'})
    return JSONResponse(status_code=201, content={'message':'premio actualizado con éxito'})

@prize_router.put('/prize/activate/{id}', status_code=201)
def activate_prize(id: int, is_active: bool):
    db = Session()
    updated_prize = PrizeService(db).activate_prize(id, is_active)
    if not updated_prize:
        return JSONResponse(status_code=404, content={'message': 'Premio no encontrado'})
    return JSONResponse(status_code=200, content={'message': 'Premio actualizado con éxito'})
