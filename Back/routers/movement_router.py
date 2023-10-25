from fastapi import APIRouter
from config.database import Session
from schemas.movement_schema import MovementCreate
from services.movement_service import MovementService
from fastapi.security import OAuth2PasswordBearer
from typing import List

movement_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@movement_router.post('/create_movement')
def create_movement(movement_data: MovementCreate):
    db = Session()
    new_movement = MovementService(db).create_movement(
        user_id=movement_data.user_id,
        name=movement_data.name,
        description=movement_data.description,
        coins=movement_data.coins
    )
    return new_movement

@movement_router.get('/movement/{user_id}/user_movements')
def get_user_movements(user_id: int):
    db = Session()
    movement_service = MovementService(db)
    movements = movement_service.get_movements_by_user(user_id)
    
    if not movements:
        return {"message": "El usuario no tiene movimientos registrados."}
    
    return movements



