from models.movement_model import Movement
from models.user_model import User
from datetime import datetime
from psycopg2.errors import ForeignKeyViolation

class MovementService():
    def __init__(self,db) -> None:
        self.db = db

    def create_movement(self, user_id, name, description, coins):
        try:
            # Actualizar el saldo de monedas del usuario

            user = self.db.query(User).filter(User.id == user_id).first()
            if not user:
                error_message = "Usuario no encontrado. No se pudo actualizar el saldo de moneda"
                print(error_message)
                return {"message": error_message}
            # Creación del movimiento
            user.coins += coins
            self.db.commit()
            self.db.refresh(user)
            
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
        except ForeignKeyViolation as e:
                return {"message": f"Error de clave foránea: {e}"}
    
    def get_movements_by_user(self, user_id):
        movements = self.db.query(Movement).filter(Movement.user_id == user_id).all()
        return movements

