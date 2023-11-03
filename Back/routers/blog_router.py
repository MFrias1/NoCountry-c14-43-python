from fastapi import APIRouter
from fastapi.security import OAuth2PasswordBearer
from typing import List
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from services.blog_service import BlogService
from schemas.blog_schema import *
from fastapi import Depends, HTTPException

blog_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@blog_router.post('/create_posts', status_code=201, response_model=CreateBlog)
def create_publication(create_publication: CreateBlog):
    try:
        data = BlogService().create_publication(create_publication)
        if not data:
            raise HTTPException(status_code=404, content={'msg':'post no registrado'})
        content={'msg':'post registrado',
                'data':jsonable_encoder(data)}
        return JSONResponse(status_code=201, content=content)
    except Exception as e:
            raise HTTPException(status_code=500, content={'msg':'Error interno del servidor'})

@blog_router.get('/posts_all', response_model=List[BlogGetAll], status_code=201)
def list_posts():
    try:
        posts = BlogService().get_blog_all()
        return JSONResponse(status_code=200, content=jsonable_encoder(posts))
    except Exception as e:
        raise HTTPException(status_code=500, content={'msg':'Error interno del servidor'})

@blog_router.get('/posts/{id}',status_code=200, response_model=BlogForId)
def get_posts_id(id:int):
    try:
        post = BlogService().get_blog_for_id(id)
        return JSONResponse(status_code=200, content=jsonable_encoder(post))
    except Exception as e:
        raise HTTPException(status_code=500, content={'msg':'Error interno del servidor'})

@blog_router.put('/posts/update_blog/{id}', status_code=201, response_model=dict)
def update_posts(id:int,posts:UpdateInfoBlog):
    try:
        result = BlogService().blog_update(id,posts)
        if not result:
            raise Exception(status_code=404, content={'msg':'post no encontrado'})
        return JSONResponse(status_code=201, content={'msg':'post actualizado con éxito'})
    except Exception as e:
         raise HTTPException(status_code=500, content={'msg':f'Error interno del servidor {e}'})

@blog_router.delete('/posts/delete_blog{id}', status_code=201, response_model=dict)
def delete_posts(id:int,posts:DeleteBlog):
    try:
        result = BlogService().blog_delete(id,posts)
        if not result:
            raise HTTPException(status_code=404, content={'msg':'post no encontrado'})
        return JSONResponse(status_code=201, content={'msg':'post eliminado con éxito'})
    except Exception as e:
        raise HTTPException(status_code=500, content={'msg':'Error interno del servidor'})
