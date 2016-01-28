from bottle import run, template, static_file, get, post, request
import db

dbase = db.DB()

@post("/subscribe")
def create_account():
	firstName = request.forms.get('firstName')
	lastName = request.forms.get('lastName')
	email = request.forms.get('email')
	password = request.forms.get('password')
	program = request.forms.get('program')
	skills = request.forms.get('skills')
	job = request.forms.get('job')
	country = request.forms.get('country')

	dbase.subscribe(firstName, lastName, email, password, program, skills, job, country)


@post("/auth")
def authentificaion():
	email = request.forms.get('email')
	password = request.forms.get('password')

	dbase.auth(email, password)

run(host='localhost', port=7000, debug=True)