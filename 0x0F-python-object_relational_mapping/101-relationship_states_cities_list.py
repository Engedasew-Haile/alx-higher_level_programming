#!/usr/bin/python3
# Lists all States and corresponding Cities in the database hbtn_0e_101_usa.
# Usage: ./101-relationship_states_cities_list.py <mysql username> /
#                                                 <mysql password> /
#                                                 <database name>
import sys
from relationship_state import Base, State
from relationship_city import City
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship

if __name__ == "__main__":
    db_username = sys.argv[1]
    db_password = sys.argv[2]
    db_name = sys.argv[3]

    uri = 'mysql+mysqldb://{username}:{password}@localhost:3306/{dbname}'
    db_url = uri.format(
        username=db_username,
        password=db_password,
        dbname=db_name
    )

    engine = create_engine(db_url)
    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    for instance in session.query(State).order_by(State.id):
        print(instance.id, instance.name, sep=": ")
        for city_ins in instance.cities:
            print("    ", end="")
            print(city_ins.id, city_ins.name, sep=": ")
