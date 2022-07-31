// //node apps are async by default
// //useful for data intense and real-time apps

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// // sayHello('test user');


// //in Node we don't have the the window or document objects 
// //since these are part of the runtime environment that we get with browsers
// // console.log(window); //error

// //in node we have other objects

// // learning about node modules
// console.log(); //global object, which means we can access it anywhere

// setTimeout(); //another global object available in Node
// // -> used to call a function after a delay

// clearTimeout();
// setInterval(); //repeatedly call a function after a given delay
// clearInterval(); //stop that function from being called repeatedly


// window();
// //in browser we have a window object that represents the global scope,
// //all the variables / functions that are defined globally can be accessed through the window()

// window.console.log(); //example
// console.log(); //same thing


// //in node we have the global object
// global.setTimeout(); //example
// setTimeout(); //same


//if we create a new variable like so
var message = '';
console.log(global.message); //error -> undefined
// when we create new variables in node they don't get added to the global object
// they're only scoped to this file "app.js" and they are not available outside of this file.




// 2. ---- node modules ----
//every node application has at least the main module e.g. app.js
console.log(module); //output a json object in console

//in node every file is a module and the vars/functions 
//defined in that file are "ONLY scoped to that module"


// 3. ---- import modules ---- 
const log = require('./logger');

// logger.log('message');
// console.log(logger);
log('----test message');




