import fdb

def init_db():
    con = connect_to_database()
    cur = con.cursor()

    return con, cur

def connect_to_database(status: str='prod') -> fdb.Connection:
    """ Connect to the firebird database
        Default database to connect is the AVERP empty db
        :return: Connection object
    """
    # fb_library_name=r"C:\Users\Princen.Vijayakumar\Downloads\Firebird-2.5.9.27139-0_x64\bin\fbclient.dll"
    if status == 'prod':
        print("Altering production database...")
        con = fdb.connect(
            host='192.168.178.51', database='/AvERPDB/XDIRECT_DB.FDB', user='SYSDBA',
            password='masterkey', charset='UTF8'
        )
    else:
        con = fdb.connect(
            dsn='C:/Program Files (x86)/AVERP/AVERP.FDB', user='SYSDBA',
            password='masterkey', charset='UTF8'
        )

    return con
