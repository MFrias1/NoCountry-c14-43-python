from sqlalchemy import and_
from models.user_model import User
from middlewares.authentications import hash_password
from config.database import Session


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
        data = new_user.__dict__
        data = {key: value for key, value in data.items() if not key.startswith("_") }
        return data
    
    def post_login_user(self, email, password):
        password_hash = hash_password(password)
        result = self.db.query(User).filter(and_(User.email == email, User.password == password_hash)).first()
        return result
            
    def get_user_all(self):
        result = self.db.query(User).all()
        return result