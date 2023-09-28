var express = require("express");
var app = express();

app.use(express.static(__dirname)); //serve html file

var messages = [
    { name: 'Tim', message: "Hi" },
    { name: 'Ben', message: "Yo" },
];

app.get('/messages', (req, res) => {
    res.send(messages);
});


var server = app.listen(3000, () => {
    console.log("server is listening on port", server.address().port);
});
