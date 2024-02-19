// What is Callback functions ?
/* as we already know functions are first class citizens in js, that means that you can take a function and pass
it to another function and when do you do so , this function which you passes into the another fundtion is 
known as callback functions */
/*callback gives us the power of asynchronousity*/

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
}); // y here is callback function, but why

// Js is a synchronous and signgle-threaded language
/* that means it can only do one thing at a time that too in specific order */

// Blocking the main thread
