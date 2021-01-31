let input = document.querySelector('#input')
let pythonspan = document.querySelector('#pythonspan')
let socket_pythonspan = document.querySelector('#socket_pythonspan')
let btn = document.querySelector('#btn')
let socketiobtn = document.querySelector('#socketiobtn')


/**** START PYTHON SERVER ***********/
//function startPythonServer() {
        var { PythonShell } = require('python-shell');

        let options = {
                mode: 'text',
                pythonPath: '/usr/local/bin/python3.8' //may need to change this if using outside docker?
        };

        shell = PythonShell.run('src/server.py', options, function (err, results) {
                if (err) throw err;
                //results is array of messages collected during execution
                console.log('response: ', results);
        });

        //get messages sent through stdout/stderr
        shell.on('message', function (message) {
                console.log('message: ', message);
        });

        shell.on('stderr', function (message) {
                console.log('stderr: ', message);
        });
//}

//startPythonServer();

/**** INIT SOCKETIO ***/
var socket = io('http://localhost:5000');

socket.on('connect', function () {
        console.log("connected to python backend");
});

socket.on('hello', function () {
        console.log("hello from backend");
});

socket.on('python message', function (data) {
        socket_pythonspan.textContent = data.data;
        console.log(data);
        console.log("received message");
});


/**** REST API HANDLERS ***********/
function onclickREST() {
        /* use REST api to send data to python backend. Is this performant?
        especially with a lot of data? */
        fetch(`http://127.0.0.1:5000/${input.value}`).then((data)=>{
                return data.text();

        }).then((text)=>{
                console.log("data: ", text);
                pythonspan.textContent = text;
        }).catch(e=>{
                console.log(e);
        })
}

btn.addEventListener('click', () => {
        onclickREST();
});

// btn.dispatchEvent(new Event('click'))

/***** SOCKET API HANDLERS **********/
function onclickSocket() {
        input_text = input.value
        socket.emit('frontend message', {data: input_text})
        /*
        console.log('hhhhh');
        shell.end(function (err, code, signal) {
                if (err) throw err;
                console.log('exit code: ', code);
                console.log('signal: ', signal);
                console.log('finished');
        });
        console.log('fffffin');
        */
}


socketiobtn.addEventListener('click', () => {
        onclickSocket();
});

// socketiobtn.dispatchEvent(new Event('click'))

/************* Two js *****************/
var elem = document.getElementById('twojs');
var params = { width: 285, height: 200};
var two = new Two(params).appendTo(elem);

var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);

circle.fill = '#FF8000';
circle.stroke = 'orangered';
circle.linewidth=5;

rect.fill = 'rgb(9, 200, 255)';
rect.opacity = 0.75;
rect.noStroke();

two.update();

