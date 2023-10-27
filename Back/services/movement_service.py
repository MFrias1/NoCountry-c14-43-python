from models.movement_model import Movement
from models.user_model import User
from datetime import datetime
from fastapi import HTTPException

# crear movimientos
class MovementService():
    def __init__(self,db) -> None:
        self.db = db

    def create_movement(self, user_id, name, description, coins):
        try:
            current_datetime = datetime.now()
            new_movement = Movement(
                user_id=user_id,
                name=name,
                description=description,
                coins=coins,
                date=current_datetime
            )
            self.db.add(new_movement)
            self.db.commit()
            self.db.refresh(new_movement)
            return new_movement
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error interno del servidor")
    
    # Obtener todos los movimientos de un usuario
    def get_movements_by_user(self, user_id):
        movements = self.db.query(Movement).filter(Movement.user_id == user_id).all()
        if not movements:
            raise HTTPException(status_code=404, detail="El usuario no tiene movimientos registrados.")
        return movements