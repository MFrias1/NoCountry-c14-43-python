from pydantic import BaseModel, HttpUrl
from datetime import datetime

class CreateBlog(BaseModel):
    user_id : int
    description: str
    date_publication : datetime
    image: str

    
