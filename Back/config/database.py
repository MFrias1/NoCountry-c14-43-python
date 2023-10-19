import os
from sqlalchemy import create_engine
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# sqlite_file_name = '../database.sqlite'
# base_dir = os.path.dirname(os.path.realpath(__file__))


cnx_railway = "postgresql://postgres:jNCGUvEUz9ODFHsNYzkL@containers-us-west-203.railway.app:7565/railway"
cnx_localhost = "postgresql://postgres:pass@localhost:5432/recicla_ando" 
database_url = cnx_railway

engine = create_engine(database_url, echo=True)

Session = sessionmaker(bind=engine)

Base = declarative_base()



print(database_url)