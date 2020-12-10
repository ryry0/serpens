import sys
from flask import Flask
from flask_cors import cross_origin

server = Flask(__name__)


@server.route("/<input>")
@cross_origin()
def prepend_hello(input):
    return "hello" + str(input)

@server.route("/")
@cross_origin()
def default_output():
    return "default_text"

if __name__ == "__main__":
    server.run(host='127.0.0.1', port=5000)
