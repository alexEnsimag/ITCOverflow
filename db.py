#import mysql
#import mysql.connector as connector
import MySQLdb
# import _mysql

class DB:
    def __init__(self):
        self.cnx = MySQLdb.connect(host="127.0.0.1", port=3306, user='root', db='ITCOverflow')
        self.cursor = self.cnx.cursor()

    def auth(self, email, password):
        request = "SELECT id from itcoverflow.users where email=\'%s\' and password=\'%s\'" % (email, password)
        self.cursor.execute(request)
        results = self.cursor.fetchall()
        if len(results) > 0:
            return True
        else:
            return False

    def subscribe(self, firstname, lastname, email, password, program, skills, job, country):
        request = "insert into itcoverflow.users (firstname, lastname, email, password, program, skills, job, country) " \
                  "VALUES (\'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\')" % \
                  (firstname, lastname, email, password, program, skills, job, country)
        self.cursor.execute(request)

    def __exit__(self, exc_type, exc_value, traceback):
        self.cnx.close()


#db = DB()
#print db.auth('sam@ITC.com', 'sam')
#print db.auth('sam@ITC.com', '')
#db.subscribe('alex', 'cukier', 'alex@ITC.com', 'alex', 'ITC Fellows 2016', 'c,c++,java', 'coder','hong kong')
#print db.auth('alex@ITC.com', 'alex')