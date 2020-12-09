import sys
from flask import Flask
from flask_cors import cross_origin

server = Flask(__name__)


@server.route("/<input>")
@cross_origin()
def something(input):
    return "hello" + str(input)

if __name__ == "__main__":
    server.run(host='0.0.0.0', port=5000)
