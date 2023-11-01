from sqlalchemy import and_
from middlewares.authentications import hash_password
from config.database import Session
from models.user_model import User
from schemas.user_schema import UpdateInfoUser, ChangeUserPassword

#from jwt_manager import create_token

class UserService():
    def __init__(self) -> None:
        self.db = Session()

    def post_register_user(self, user):
        new_user = User(**user.model_dump())
        new_user.password = hash_password(new_user.password)
        self.db.add(new_user)
        self.db.commit() 
        self.db.refresh(new_user) 
        self.db.close()
        data = new_user
        return data
    
    def post_login_user(self, email, password):
        password_hash = hash_password(password)
        result = self.db.query(User).filter(and_(User.email == email, User.password == password_hash)).first()
        result.is_active = True
        self.db.commit()
        self.db.refresh(result)
        self.db.close()
        return result
            
    def get_user_all_active(self):
        users =self.db.query(User).filter(User.is_active).all()
        self.db.close()
        return users
    
    def get_user_all(self):
        users =self.db.query(User).all()
        self.db.close()
        return users
    
    def get_user_for_id(self, id):
        user = self.db.query(User).filter(and_(User.id == id, User.is_active)).first()
        return user
    
    def put_user_update(self, id, data:UpdateInfoUser):
        user = self.get_user_for_id(id)
        if not user:
            return user
        user.first_name = data.first_name
        user.last_name = data.last_name
        user.country = data.country     
        self.db.commit()
        self.db.refresh(user) 
        self.db.close()
        
        return user      

    def put_change_password(self, id, data:ChangeUserPassword):
        user = self.get_user_for_id(id)
        if not user:
            return user
        data.password = hash_password(data.password)
        user.password = data.password
        self.db.commit()
        self.db.refresh(user) 
        self.db.close()
        return user
    
    def put_deactivate_user(self, id):
        user = self.get_user_for_id(id)
        if not user: 
            return user
        user.is_active = False
        self.db.commit()
        self.db.close()
        return user
    
    # Se tuvo que agregar el incremento de monedas desde el manejo de la entedidad USER
    def put_coins_user(self, user_id, coins):
        # Actualizar el saldo de monedas del usuario
        user = self.get_user_for_id(user_id)
        user.coins += coins
        self.db.commit()
        self.db.refresh(user)
        return user


    
