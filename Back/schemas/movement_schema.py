from pydantic import BaseModel
from datetime import datetime
    
class MovementCreate(BaseModel):
    user_id: int
    name: str
    description: str
    coins: int
    date: datetime
    origin: str