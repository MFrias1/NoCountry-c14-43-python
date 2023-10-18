from config.database import Base
from sqlalchemy import Column, String, Integer

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String,unique=True, nullable=False)
    country = Column(String, nullable=False)
    coins = Column(Integer)
    password = Column(String, nullable=False)

