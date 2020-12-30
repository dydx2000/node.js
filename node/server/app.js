const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'


    })
    res.end('<h2>hello wr </h2>');
    console.log(req.method);
});

app.listen(3000);
console.log('Web server started successfully.');