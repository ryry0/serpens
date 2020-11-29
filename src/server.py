from flask import flask
server = Flask(__name__)

@server.route("/")
def hello():
    return "Hello World!"

if __name__== "__ain__":
    server.run(host='0.0.0.0')
