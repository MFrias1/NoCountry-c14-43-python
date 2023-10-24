from config.database import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.sql import func


class Blog(Base):
    __tablename__ = 'blog'
    publication_id = Column(Integer, primary_key=True, index=True)
    description = Column(String(255), index=True)
    image = Column(String(255))
    date_publication = Column(DateTime, server_default=func.now())
    user_id = Column(Integer, ForeignKey('users.id'))