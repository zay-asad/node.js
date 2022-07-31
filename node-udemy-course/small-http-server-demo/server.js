//creating a server
const http = require('http');

const server = http.createServer((request, response) => {
    //these can be seen inside terminal once you hit localhost:3000 in the browser
    console.log('headers', request.headers);
    console.log('methods', request.method);
    console.log('url', request.url);
    console.log('test response from server');

    const user = {
        name: 'John',
        hobby: 'coding'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);