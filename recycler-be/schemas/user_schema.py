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

    # class config:
    #     json_schema_extra = {
    #         "example": {
    #             "id": 1,
    #             "first_name": "Nombre Usuario",
    #             "Last_name" : "Apellido Usuario",
    #             "country" : "India",
    #              "coins": 20,
    #             "password": "mi_clave_secreta"
    #         }
    #     }

class LoginUser(BaseModel):
    email : str
    password : str

#todo #recocha