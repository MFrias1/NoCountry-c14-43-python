from models.prize_model import Prize
from models.user_model import User
from schemas.prize_schema import *

class PrizeService():
    def __init__(self,db) -> None:
        self.db = db

    def create_prize(self, prize):
        new_prize = Prize(name=prize.name,
                          description=prize.description,
                          coins=prize.coins,
                          url_image=prize.url_image,
                          is_active=prize.is_active)
        self.db.add(new_prize)
        self.db.commit()
        self.db.refresh(new_prize)
        return new_prize

    def prize_get_all(self):
        prize =self.db.query(Prize).all()
        return prize
    
    def prize_get_for_id(self,id):
        prize = self.db.query(Prize).filter(Prize.prize_id == id).first()
        return prize
    
    def prize_update(self, id, data:Prize):
        prize = self.prize_get_for_id(id)
        if not prize:
            return prize
        
        # Actualización de campos individualmente
        if data.name:
            prize.name = data.name
        if data.description:
            prize.description = data.description
        if data.url_image:
            prize.url_image = data.url_image
        if data.coins:
            prize.coins = data.coins
        if data.is_active is not None:
            prize.is_active = data.is_active
            
        self.db.commit()
        return prize
    
    def activate_prize(self, id: int, is_active: bool):
        prize = self.prize_get_for_id(id)
        if not prize:
            return prize
        prize.is_active = is_active
        self.db.commit()
        return prize
    
    def get_active_prizes(self):
        active_prizes = self.db.query(Prize).filter(Prize.is_active == True).all()
        return active_prizes