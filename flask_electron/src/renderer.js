let input = document.querySelector('#input')
let pythonspan = document.querySelector('#pythonspan')
let btn = document.querySelector('#btn')

function startPythonServer() {
        var { PythonShell } = require('python-shell');

        let options = {
                mode: 'text',
                pythonPath: '/usr/local/bin/python3.8' //may need to change this if using outside docker?
        };

        PythonShell.run('src/server.py', options, function (err, results) {
                if (err) throw err;
                //results is array of messages collected during execution
                console.log('response: ', results);
        });
}

startPythonServer();

function onclick() {
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
        onclick();
});

btn.dispatchEvent(new Event('click'))

// Two js
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

