from fastapi.encoders import jsonable_encoder
from sqlalchemy import and_
from middlewares.authentications import hash_password
from config.database import Session
from models.user_model import User
from schemas.user_schema import UpdateInfoUser

#from jwt_manager import create_token

class UserService():
    def __init__(self,db) -> None:
        self.db = db

    def post_register_user(self, user) -> dict:
        new_user = User(**user.model_dump())
        new_user.password = hash_password(new_user.password)
        self.db.add(new_user)
        self.db.commit() 
        self.db.refresh(new_user) 
        data = jsonable_encoder(new_user)
        return data
    
    def post_login_user(self, email, password):
        password_hash = hash_password(password)
        result = jsonable_encoder(self.db.query(User).filter(and_(User.email == email, User.password == password_hash)).first())
        return result
            
    def get_user_all(self):
        users = jsonable_encoder(self.db.query(User).all())
        return users
    
    def get_user_for_id(self, id):
        user = jsonable_encoder(self.db.query(User).filter(User.id == id).first())
        return user
    
    def put_user_update(self, id, data:UpdateInfoUser):
        user = self.get_user_for_id(id)
        print(user)
        if not user:
            return user
        user.first_name = data.first_name
        user.last_name = data.last_name
        user.email = data.email
        user.country = data.country     
        self.db.commit()
        return user      

