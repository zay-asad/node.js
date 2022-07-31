//both var and function are scoped to this "logger.js" module and they cannot be accessed outside

var url = 'http://mylogger.io/log';

function log(message) {
    //send an HTTP request
    console.log(message);
}

// module.exports.log = log; //export log method to make it public
module.exports = log; //export a single function