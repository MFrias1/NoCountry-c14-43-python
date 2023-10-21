from sqlalchemy import and_
from models.movement_model import Movement
from middlewares.authentications import hash_password
from config.database import Session

class MovementService():
    def __init__(self,db) -> None:
        self.db = db

    def get_movement_all(self):
        result = self.db.query(Movement).all()
        return result
