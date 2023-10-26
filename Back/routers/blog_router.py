from fastapi import APIRouter
from config.database import Session
from schemas.blog_schema import CreateBlog
from fastapi.security import OAuth2PasswordBearer
from typing import List
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from services.blog_service import BlogService


blog_router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer('/token')

@blog_router.post("/create_posts", status_code=201, response_model=CreateBlog)
def create_publication(create_publication: CreateBlog):
    db = Session()
    data = BlogService(db).create_publication(create_publication)
    if not data:
        return JSONResponse(status_code=404, content={'msg':'post no registrado'})
    content={'msg':'post registrado',
             'data':jsonable_encoder(data)}
    
    return JSONResponse(status_code=201, content=content)