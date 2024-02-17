// whenever we try to access a variable inside a temporal dead zone it gives you a reference error

console.log(a); // ex: cannot access a before initialzation
let a = 10;

console.log(x); // ex: x is not defined

// TYPE ERROR
const PI = 100;
PI = 200;
// this will give type error

// DIFFERENCE BETWEEN SYNTAX ERROR, TYPE ERROR, REFERENCE ERROR
// type error     "assigment to constant variable"
// syntax wrror   "missing initilizer in const declaration","identifier a has been already declared"
// reference error "cannot access a before initialization","a is not defined"
