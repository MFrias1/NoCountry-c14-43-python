from pydantic import BaseModel
from datetime import datetime

class MovementGetAll(BaseModel):
    movement_id: int
    user_id: int
    name: str
    description: str
    coins: int
    date: str
