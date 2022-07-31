//creating a server
const http = require('http');

const server = http.createServer((request, response) => {
    //these can be seen inside terminal once you hit localhost:3000 in the browser
    console.log('headers', request.headers);
    console.log('methods', request.method);
    console.log('url', request.url);

    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello</h1>');
})

server.listen(3000);