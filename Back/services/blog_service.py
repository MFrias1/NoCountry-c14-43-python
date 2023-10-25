from models.blog_model import Blog
from models.user_model import User
from datetime import datetime
from schemas.blog_schema import *



class BlogService():
    def __init__(self,db) -> None:
        self.db = db

    def create_publication(self, blog) -> dict:
       
        new_publication = Blog(**blog.model_dump())
        self.db.add(new_publication)
        self.db.commit()
        self.db.refresh(new_publication)
        data = new_publication
        return data


