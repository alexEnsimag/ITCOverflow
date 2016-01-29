from bottle import run, template, static_file, get, post, request
import db
import json

dbase = db.DB()


@get('/')
def login():
    return template('login.html')


@post('/subscribe')
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
    return json.dumps({'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'program': program,
                'skills': skills,
                'job': job,
                'country': country})


@post("/auth")
def authentification():
    email = request.forms.get('email')
    password = request.forms.get('password')

    return dbase.auth(email, password)


@post("/create_topic")
def create_topic():
    title = request.forms.get('title')
    category = request.forms.get('category')
    text = request.forms.get('text')

    dbase.create_topic(title, category, text)
    return json.dumps({'title': title,
                'category': category,
                'text': text
                })

@post("/create_answer")
def create_answer():
    text = request.forms.get('text')

    dbase.create_topic(text)
    return json.dumps({'text': text
                })


@get('/js/<filename:re:.*\.js>')
def javascripts(filename):
    return static_file(filename, root='js')


@get('/css/<filename:re:.*\.(css|map)>')
def stylesheets(filename):
    return static_file(filename, root='css')


@get('/images/<filename:re:.*\.(jpg|png|gif|ico)>')
def images(filename):
    return static_file(filename, root='images')


run(host='localhost', port=7000, debug=True)
