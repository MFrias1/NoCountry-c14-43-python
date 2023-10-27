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

    def get_blog_all(self):
        posts =self.db.query(Blog).all()
        return posts
    
    def get_blog_for_id(self,id):
        post = self.db.query(Blog).filter(Blog.publication_id == id).first()
        return post

    def blog_update(self, id, data:UpdateInfoBlog):
        post = self.get_blog_for_id(id)
        if not post:
            return post
        post.type_blog = data.type_blog
        post.title = data.title
        post.description = data.description
        post.url_video = data.url_video
        post.url_image = data.url_image
        self.db.commit()
        return post
    
    def blog_delete(self, id, data: DeleteBlog):
        post = self.get_blog_for_id(id)
        if not post:
            return post
        post.type_blog = data.type_blog
        post.title = data.title
        post.description = data.description
        post.url_video = data.url_video
        post.url_image = data.url_image
        self.db.commit()
        return post
        
    
        
    