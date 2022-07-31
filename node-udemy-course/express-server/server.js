//creating an express server
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send("<h1>hellooo</h1");
    //sending json
    const user = {
        name: 'bob',
        hobbies: 'gym'
    }
    //automatically gives back a json response
    res.send(user);
})

// additional route example
app.get('/profile', (req, res) => {
    res.send('getting profile');
})


// post request - error since we are doing a get request on the browser
// we are not sending any data (using post)
app.post('/testing', (req, res) => {
    res.send('testing route');
})



app.listen(3000);