import sys
from flask import Flask
from flask_cors import cross_origin
from flask_socketio import SocketIO, send, emit

# handle comms from front end via http requests
server = Flask(__name__)


@server.route("/<input>")
@cross_origin()
def prepend_hello(input):
    return "hello" + str(input)

@server.route("/")
@cross_origin()
def default_output():
    return "default_text"

# handle comms from front end via sockets
# a string 'custom message' is received,along with a json packet

socketio = SocketIO(server, cors_allowed_origins="*") #, logger=True, engineio_logger=True)

@socketio.on('frontend message')
def handle_frontend_message(json):
    print('received json: ' + str(json), flush=True)

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('hello')


if __name__ == "__main__":
    socketio.run(server, host='0.0.0.0', port=5000, debug=True)
