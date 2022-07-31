//creating an express server that serves simple static assets
const express = require('express');

const app = express();

//access index.html inside public folder and print out in 
//http://localhost:3000/
app.use(express.static(__dirname + '/public'));


//404 route
app.get('/id', (req, res) => {
    console.log(req.params)
    res.status(404).send("page not found");
})

app.listen(3000);