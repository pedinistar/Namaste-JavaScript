// let and const declarations are hoisted but they are hoisted very differently as compared
// to var declaration. these let and const are in the temporal dead zone for the time being

console.log(b); // undefined
// as we studied earlier we can access b before it is declared
console.log(a); // error : cannot access a before initialization

let a = 10;
var b = 100;

console.log(a); // access

/*
>script
a:undefined
>global
b:undefined
*/

// let and const variables are stored in different memory space and you can't access this memory
// space before you have initialzed the variables.

// RELATION OF GLOBAL OBJECT AND VARIABLES VAR LET & CONST
// var declarations were attached to global object (window)
var b = 10;
console.log(window.b);
let c = 10;
console.log(window.c); // undefined

// DUPLICATE REDECLARATIONS OF LET AND CONST VARIABLES
// let age = 10;
// let age = 20;
// syntax error : no code will be run... because duplicate/redeclaration of age.

var age = 10;
var age = 20;
// incase of var it doen't give any error

let x;
x = 10;
console.log(x);

// but
// const y; -> syntax error : missing initilazer in declaration
// y = 10;

// use const and let
