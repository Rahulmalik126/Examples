console.log(x); // undefined as var can be hoisted with multiple initialization
var x = 1;
var x = 2; // No error, because `var` allows re-declaration
console.log(x);
