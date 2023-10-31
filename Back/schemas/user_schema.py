from pydantic import BaseModel

class CreateUser(BaseModel):
    first_name : str
    last_name : str
    email : str
    country : str
    password : str

class UserOut(BaseModel):
    id:int
    first_name : str
    last_name : str
    email : str
    country : str

class LoginUser(BaseModel):
    email : str
    password : str

class UpdateInfoUser(BaseModel):
    first_name : str
    last_name : str
    country : str

class ChangeUserPassword(BaseModel):
    password : str
