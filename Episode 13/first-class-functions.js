b(); // {...}
// c(); // erroe: c is not a function
console.log(c); // undefined
/* so this is the difference b/w function expression and function statement, during the hoisting 
phase , during the memory creation phase, b is created a memory and this function is assigned to b,
but in case of a function expression this c is treated like a variable, it is assigned undefined 
initially until the code hit's this line itself; then only this function is assigned to variable c,
until then it's undefined */

//🌿 FUNCTION STATEMENT / FUNCTION DECLARATION 🌿
/* function statements require a function name on the other hand anonymous functions doen't have names*/
function a() {}
function b() {
  console.log("this is function statement");
}
/* way of creating a function is called function statement c*/

//🌿 FUNCTION EXPRESSION 🌿
var c = function () {
  console.log("this is function expression");
};
/* you can assign function to a variable also, here function acts like value */

/* Difference b/w function expression and function statement*/
// the major difference b/w these two is hoisting
// lets see how do we call this function
b();
c();
// what if we call it before declaration [see at the top🔝]

//🌿 ANONYMOUS FUNCTION 🌿
/* a function without a name is anonymous function, these functions doesn't have their own identity*/
// function(){}
/* anonymous functions are used at a place where functions are used as values. that means you can use
it to assign to a variable*/

//🌿 NAMED FUNCTION EXPRESSION 🌿
var dog = function dogFunc() {
  console.log("this is a named function expression");
};
dog(); // this is a named function expression
dogFunc(); // error: dogFunc is not defined

//🌿 DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS 🌿
function name(params) {
  // this params variable is a local varible which you can only access inside this function
}
name("sneha"); // this is the argument given [sneha]

//🌿 FIRST CLASS FUNCTIONS / FIRST CLASS CITIZENS🌿
/* functions which we pass as arguments or which we return, the ablity to use 
functions as values is known as first class functions and can be passed as an argument to another functions
and can be returned from the functions, this ability is known as first class functions*/
// "functions are first class citizens" mtlb first class functions
name(function () {});

function xyz() {}
name(xyz);

//🌿 ARROW FUNCTIONS 🌿
// it is a part of ES6
