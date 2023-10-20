from pydantic import BaseModel

class CreateUser(BaseModel):
    first_name : str
    last_name : str
    email : str
    country : str
    coins : int
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
    password : str


#todo #recocha