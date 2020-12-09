let input = document.querySelector('#input')
let pythonspan = document.querySelector('#pythonspan')
let btn = document.querySelector('#btn')

function startPythonServer() {
        var { PythonShell } = require('python-shell');

        let options = {
                mode: 'text',
                pythonPath: '/usr/bin/python3.8' //may need to change this if using outside docker?
        };

        PythonShell.run('server.py', options, function (err, results) {
                if (err) throw err;
                //results is array of messages collected during execution
                console.log('response: ', results);
        });
}

startPythonServer();

function onclick() {
        /* use REST api to send data to python backend. Is this performant?
        especially with a lot of data? */
        fetch(`http://0.0.0.0:5000/${input.value}`).then((data)=>{
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
