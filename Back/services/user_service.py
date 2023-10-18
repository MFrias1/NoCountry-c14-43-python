from models.user_model import User
#from jwt_manager import create_token

class UserService():
    def __init__(self,db) -> None:
        self.db = db

    def post_register_user(self, user) -> dict:
        new_user = User(**user.model_dump())
        self.db.add(new_user)
        self.db.commit() 
        self.db.refresh(new_user) 
        data = new_user.__dict__
        data = {key: value for key, value in data.items() if not key.startswith("_") }
        return data
    
    def post_login_user(self, email, password):
        auth = self.db.query(User).filter(User.email == email and User.password==password)
        if auth:
            pass
            
