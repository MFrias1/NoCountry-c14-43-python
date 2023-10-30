from pydantic import BaseModel, HttpUrl
from datetime import datetime

class CreateBlog(BaseModel):
    type_blog: str
    title: str
    description: str
    url_video: str
    url_image: str
    date_publication: datetime



class BlogGetAll(BaseModel):
    type_blog: str
    title: str
    description: str
    url_video: str
    url_image: str


class BlogForId(BaseModel):
    publication_id: int
    type_blog: str
    title: str
    description: str
    url_video: str
    url_image: str

class UpdateInfoBlog(BaseModel):
    type_blog: str
    title: str
    description: str
    url_video: str
    url_image: str

class DeleteBlog(BaseModel):
    publication_id: int
    type_blog: str
    title: str
    description: str
    url_video: str
    url_image: str
    

    
