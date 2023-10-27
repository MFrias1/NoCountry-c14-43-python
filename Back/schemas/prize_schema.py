from pydantic import BaseModel

class CreatePrize(BaseModel):
    # type_prize: str
    name: str = None
    description: str = None
    url_image: str = None
    coins: int = None
    is_active: bool = None

class IsActivatePrize(BaseModel):
    prize_id: int
    is_active: bool