// is this scalable
/*
function counterFunc() {
  var counter = 0;
  return function incrementCounter() {
    counter++;
    console.log(counter);
  };
}
*/
// no it's not
// so we can use constructor function for this

function CounterFunc() {
  var counter = 0;
  this.incrementCounter = function () {
    counter++;
    console.log(counter);
  };
  this.decrementCounter = function () {
    counter--;
    console.log(counter);
  };
}
// this is a constructor function thus we need to use new keyword
var counter1 = new CounterFunc();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
