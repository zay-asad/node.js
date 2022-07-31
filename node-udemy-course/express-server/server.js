//creating an express server
const express = require('express');
// const bodyParser = require('body-parser');


const app = express();


// //express has a concept of middleware
// app.use((req, res, next) => {
//     console.log('<h1>hellooooo</h1>')
//     next(); //express keep running through the next requests
// })


app.use(express.urlencoded({ extended: false })); //bodyparser
app.use(express.json()); //bodyparser json (in case we're sending json from postman)


app.get('/', (req, res) => {

    //restful apis
    // console.log(req.query); //http://localhost:3000/?name=bobi&age=18
    // console.log(req.body)// req.body
    // console.log(req.header); //use postman
    // console.log(req.params);  //use postman

    // res.send("<h1>hellooo</h1");
    //sending json
    const user = {
        name: 'bob',
        hobbies: 'gym'
    }
    //automatically gives back a json response
    res.send(user);
})

//creating a 404 route
app.get('/id', (req, res) => {
    console.log(req.params)
    res.status(404).send("page not found");
})

// additional route example
app.get('/profile', (req, res) => {
    res.send('getting profile');
})


// how to test:
// 1. do a POST request using postman (node.js local app testing collection)
// 2. check terminal (make sure the server js is running)
app.post('/profile', (req, res) => {
    console.log(req.body); //need to install body parser middleware to use this
    const user = {
        name: 'bob',
        hobbies: 'gym'
    }
    res.send(user);
})



app.listen(3000);