from models.movement_model import Movement
from datetime import datetime
from fastapi import HTTPException

class MovementService():
    def __init__(self,db) -> None:
        self.db = db
    
    def create_movement(self, user_id, name, description, coins, origin):
        try:
            current_datetime = datetime.now()
            origin=origin
            if origin == "premio":
                coins = -coins  # Hacer que las monedas sean negativas para un premio
            new_movement = Movement(
                user_id=user_id,
                name=name,
                description=description,
                coins=coins,
                date=current_datetime,
                origin=origin
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
    
    def redeem_prize(self, user_id, prize, user_service):
        # Llama a la función para crear un nuevo movimiento
        self.create_movement(
            user_id=user_id,
            name=f"Canje de premio: {prize.name}",
            description=f"Canje de premio: {prize.description}",
            coins=-prize.coins,
            origin="premio"
        )
        # Actualiza el saldo del usuario
        user_service.put_coins_user(user_id, -prize.coins)
        return True