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