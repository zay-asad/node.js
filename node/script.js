const script2 = require("./script2.js"); //common JS syntax
// import { largeNumber } from "./script2.js"; //es6 way

const a = script2.largeNumber;
const b = 5;

console.log(a, b);

setTimeout(() => { //timeout global object
    console.log(a + b);
}, 2000);

console.log(__dirname); //get current directory

//window object only works inside the browser
//globalThis works outside the browser (useful with Node.js)