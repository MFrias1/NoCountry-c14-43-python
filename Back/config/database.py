import os
from sqlalchemy import create_engine
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# sqlite_file_name = '../database.sqlite'
# base_dir = os.path.dirname(os.path.realpath(__file__))

cnx_railway = "postgresql://postgres:jNCGUvEUz9ODFHsNYzkL@containers-us-west-203.railway.app:7565/railway"
cnx_localhost = "postgresql://postgres:jose@localhost:5432/recicla_ando" 
cnx_render = "postgresql://postgress:DXGBUR6oLx5WuQAR8ox6zFC6ZVtns36X@dpg-ckonvb7kc2qc73eprmu0-a/recicla_ando" 
cnx_render_local = 'postgresql://postgress:DXGBUR6oLx5WuQAR8ox6zFC6ZVtns36X@dpg-ckonvb7kc2qc73eprmu0-a.oregon-postgres.render.com/recicla_ando'
database_url = cnx_render

engine = create_engine(database_url, echo=True)

Session = sessionmaker(bind=engine)

Base = declarative_base()



#print(database_url)
