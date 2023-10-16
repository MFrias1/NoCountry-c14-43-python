import os
from sqlalchemy import create_engine
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# sqlite_file_name = '../database.sqlite'
# base_dir = os.path.dirname(os.path.realpath(__file__))

database_url = "postgresql://postgres:root@localhost:5432/recicla_ando"

engine = create_engine(database_url, echo=True)

Session = sessionmaker(bind=engine)

Base = declarative_base()



print(database_url)