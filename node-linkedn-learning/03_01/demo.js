var fs = require('fs'); //filesystem module

var data = require('./data.json');
console.log(data.name);

fs.readFile('./data.json', 'utf-8', (err, data) => { //callback with arrow funtion
    var data = JSON.parse(data); //taking data param and convert to json
    console.log(data);
});
