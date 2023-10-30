from fastapi import APIRouter
from config.database import Session
from schemas.blog_schema import CreateBlog
from fastapi.security import OAuth2PasswordBearer
from typing import List
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from services.blog_service import BlogService
from typing import List
from schemas.blog_schema import *


blog_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@blog_router.post('/create_posts', status_code=201, response_model=CreateBlog)
def create_publication(create_publication: CreateBlog):
    db = Session()
    data = BlogService(db).create_publication(create_publication)
    if not data:
        return JSONResponse(status_code=404, content={'msg':'post no registrado'})
    content={'msg':'post registrado',
             'data':jsonable_encoder(data)}
    
    return JSONResponse(status_code=201, content=content)

@blog_router.get('/posts_all', response_model=List[BlogGetAll], status_code=201)
def list_posts() ->List[BlogGetAll]:
    db = Session()
    posts = BlogService(db).get_blog_all()
    return JSONResponse(status_code=200, content=jsonable_encoder(posts))

@blog_router.get('/posts/{id}',status_code=200, response_model=BlogForId)
def get_posts_id(id:int):
    db = Session()
    post = BlogService(db).get_blog_for_id(id)
    return JSONResponse(status_code=200, content=jsonable_encoder(post))

@blog_router.put('/posts/update_blog/{id}', status_code=201, response_model=dict)
def update_posts(id:int,posts:UpdateInfoBlog):
    db = Session()
    result = BlogService(db).blog_update(id,posts)
    if not result:
        return JSONResponse(status_code=404, content={'msg':'post no encontrado'})
    return JSONResponse(status_code=201, content={'msg':'post actualizado con éxito'})

@blog_router.delete('/posts/delete_blog{id}', status_code=201, response_model=dict)
def delete_posts(id:int,posts:DeleteBlog):
    db = Session()
    result = BlogService(db).blog_delete(id,posts)
    if not result:
        return JSONResponse(status_code=404, content={'msg':'post no encontrado'})
    return JSONResponse(status_code=201, content={'msg':'post eliminado con éxito'})
    
