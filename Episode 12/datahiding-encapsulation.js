/*
suppose if we have a variable and we want to have some data
privacy over it , so other functions or other peices of code doe't 
have access to it -> data hiding or data privacy
or you can say that we can like encapsulate that data so that
other functions or part of dat can't access it.
*/

// var counter = 0;
// function incrementCounter() {
//   counter++;
// }
// so the major problem with this code is that any body can
// access this counter and can change it
// so here comes data hiding , we have to ensure that o
// no body in the program could change the counter
// so to achieve that we can use closure

function counterFunc() {
  var counter = 0;
  return function incrementCounter() {
    counter++;
    console.log(counter);
  };
}
// so now this varible is hidden
// console.log(counter);
// now we can't access this counter varible and modify it

// this is how we can modify the counter increase it
var counter1 = counterFunc();
counter1();
counter1();

// now like this we have hide the data

var counter2 = counterFunc(); // this will be a fresh counter in itself
console.log("separate counter");
counter2();
counter2();
counter2();
counter2();
