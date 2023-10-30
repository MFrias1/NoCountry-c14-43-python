from sqlalchemy import Column, Integer, String, Boolean
from config.database import Base

class Prize(Base):
    __tablename__ = "prize"
    prize_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    coins = Column(Integer)
    url_image = Column(String)
    is_active = Column(Boolean)