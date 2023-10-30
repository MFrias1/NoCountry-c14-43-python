from config.database import Base
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from sqlalchemy import func

class Blog(Base):
    __tablename__ = 'blog'
    publication_id = Column(Integer, primary_key=True, index=True)
    type_blog = Column(String(255))
    title = Column(String(255))
    description = Column(String(255), index=True)
    url_video = Column(String(255))
    url_image = Column(String(255))
    date_publication = Column(DateTime(timezone=True), server_default=func.now())



