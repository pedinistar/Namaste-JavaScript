// even if we don't write any code ... still javascript makes a execution context and memory space
// js creates a window and a this keyword as well.

// window is a global obejct which is created along with theglobal execution context

// When ever any javascript program is run, a global object is created that is window and a global execution
// context is created along with the "this" keyword

this == window;
true;

// Global Space is any code you write in javascript which is not inside a function.
var a = 10;
function b() {
  var x = 10;
}
// here a and function b is in the global space , as x is inside the function it will not come in global space
console.log(window.a); // 10
console.log(this.a); // 10
console.log(a); // 10
console.log(x); // x not defined
