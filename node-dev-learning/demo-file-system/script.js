const fs = require('fs'); //file system module

//readFile method from the fs module

//this method is async and it has a callback function
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        throw err;
        console.log('errorrrrrr');
    }
    //if there wasn't an error
    console.log('Async 1', data.toString());
})

//this method is synchronous -> read this file straight away.
const file = fs.readFileSync('./hello.txt');
console.log('Sync 2', file.toString());


// append
fs.appendFile('./hello.txt', ' This paragraph will be added in the text file', err => {
    if (err) {
        console(err);
    }
});


// write



