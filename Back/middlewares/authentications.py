import bcrypt
# from middlewares import salt
# Luego, al inicio de la aplicación, lee la sal desde el archivo

# stored_salt = salt.salt

# def hash_password(password: str) -> str:
#     hashed_password = bcrypt.hashpw(password.encode('utf-8'), stored_salt)
#     return hashed_password.decode('utf-8')



#Genera una nueva sal
# new_salt = bcrypt.gensalt()

# # Guarda la sal en un archivo
# with open('salt.txt', 'wb') as file:
#     file.write(new_salt)

# Luego, al inicio de la aplicación, lee la sal desde el archivo
with open('salt.txt', 'rb') as file:
    stored_salt = file.read()

def hash_password(password: str) -> str:
    # Codifica la contraseña en bytes antes de hashearla
    password_bytes = password.encode('utf-8')
    # Utiliza la sal almacenada
    hashed_password = bcrypt.hashpw(password_bytes, stored_salt)
    return hashed_password.decode('utf-8')

