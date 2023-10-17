#pip install "PyJWT==2.1.0"
from jwt import encode, decode

def create_token(data: dict) -> str:
    token: str = encode(payload=data, key='clave_secreta', algorithm='HS256')
    return token

def validate_token(token: str) -> dict:
    data:dict = decode(token, key='clave_secreta', algorithms=['HS256'])
    return data