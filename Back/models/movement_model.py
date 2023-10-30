from config.database import Base
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime
from sqlalchemy.sql import func

class Movement(Base):
    __tablename__ = "movements"
    movement_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    coins = Column(Integer)
    user_id = Column(Integer, ForeignKey('users.id'))
    date = Column(DateTime(timezone=True), server_default=func.now())
    not_push = Column(String)
    def dict(self):
        return {
            "movement_id": self.movement_id,
            "user_id": self.user_id,
            "name": self.name,
            "description": self.description,
            "coins": self.coins,
            "date": self.date.isoformat()
        }