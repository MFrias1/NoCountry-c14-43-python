from pydantic import BaseModel

class CreateUser(BaseModel):
    first_name : str
    last_name : str
    email : str
    country : str
    password : str

class CreateUserOut(BaseModel):
    id:int
    first_name : str
    last_name : str

class LoginUser(BaseModel):
    email : str
    password : str

class UserGetAll(BaseModel):
    first_name : str
    last_name : str
    email : str
    country : str
    coins : int

class UserForId(BaseModel):
    id: int
    first_name : str
    last_name : str
    email : str
    country : str
    coins : int
    password : str

class UpdateInfoUser(BaseModel):
    first_name : str
    last_name : str
    country : str
  
class ChangeUserPassword(BaseModel):
    password : str

class DeactivateUser(BaseModel):
    id: int
#todo #recocha