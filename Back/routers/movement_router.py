from fastapi import APIRouter
from config.database import Session
from schemas.movement_schema import MovementCreate
from services.movement_service import MovementService
from typing import List
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models.movement_model import Movement
from schemas.movement_schema import *
from services.movement_service import MovementService
from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi import HTTPException
from services.user_service import UserService
from services.prize_service import PrizeService


movement_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@movement_router.post('/create_movement')
def create_movement(movement_data: MovementCreate):
    db = Session()
    try:
        user = UserService().get_user_for_id(movement_data.user_id)
        
        if user:
            new_movement = MovementService(db).create_movement(
                user_id=movement_data.user_id,
                name=movement_data.name,
                description=movement_data.description,
                coins=movement_data.coins,
                origin=movement_data.origin
            )

            if new_movement:
                UserService().put_coins_user(user_id=movement_data.user_id, coins=movement_data.coins)
                content = {
                    'message': 'Movimiento ha sido creado',
                    'new_movement' : new_movement.dict()
                }
                return JSONResponse(status_code=201, content=content)

            return JSONResponse(status_code=404, content={'message': 'No se pudo crear el movimiento'})
        
        return JSONResponse(status_code=404, content={'message': 'No existe el Usuario'})
    except HTTPException as http_exception:
        return http_exception
    except Exception as e:
        return JSONResponse(status_code=500, content={'message': str(e)})
 

@movement_router.get('/movement/{user_id}/user_movements')
def get_user_movements(user_id: int):
    db = Session()
    movement_service = MovementService(db)
    
    try:
        movements = movement_service.get_movements_by_user(user_id)
        
        # Serializar los objetos Movement antes de devolverlos
        serialized_movements = [movement.dict() for movement in movements]
        return {
            "message": "Movimientos del usuario obtenidos exitosamente",
            "movements": serialized_movements
            }
    except HTTPException as http_exception:
        return http_exception
    except Exception as e:
        error_response = {
            "status_code": 500,
            "detail": str(e)
        }
        return HTTPException(status_code=500, detail=error_response)


@movement_router.post('/redeem_prize', response_model=dict)
def redeem_prize(user_id: int, prize_id: int):
    db = Session()
    movement_service = MovementService(db)
    user_service = UserService()
    prize_service = PrizeService(db)
    try:
        prize = prize_service.prize_get_for_id(prize_id)

        if not prize:
            return JSONResponse(status_code=404, content={'message': 'Premio no encontrado'})

        if not prize.is_active:
            return JSONResponse(status_code=400, content={'message': 'El premio no está activo'})

        user = user_service.get_user_for_id(user_id)
        if user.coins < prize.coins:
            return JSONResponse(status_code=400, content={'message': 'Saldo insuficiente para canjear el premio'})

        # Llama a la función en service.py
        if movement_service.redeem_prize(user_id, prize, user_service):
            return JSONResponse(status_code=200, content={'message': 'Premio canjeado con éxito'})
        else:
            return JSONResponse(status_code=500, content={'message': 'Error interno del servidor'})
    except HTTPException as http_exception:
        raise http_exception