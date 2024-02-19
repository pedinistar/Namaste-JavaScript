// print 1234 after consecutive secs 1 after 1sec 2 after 2sec
function two() {
  var i = 1;
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("hula hjula");
}
// two();
/*
hula hjula
6
6
6
6
6
*/

/*
why is it printing like this?
-it is working this way because of the closure
-a closure is a function with its lexical environment
-so even when function is taken out from its original
-scope , if its executes in another scope 
-still it remmembers its lexical environment, it can access those variables of its lexical scope
-so what will happen when this setime out takes this function and stores it somewher and attaches a timer
-so that function remmembers the refernce to i (not the value of i only refernce)

so when  the loop runs the first time so it kind of makes a copy of this function
attaches a timer to it and also remembers the reference of i
and similarly these five copy of this functions all of them are pointing to
same reference of i
they are pointing to the same reference of i because the environ ment
for all of these functions are same 

then js doesn't wait for anything, so it will run the loop again and again
and then will print hula hjula
and when the timer expires it's too late and the value of i because of loop was 
constantly running, so the i value beacme 6 and when this call back function runs after expiry of the timer
the value of i is 6 
so that is why it prints 6 everytime

*/

/*
so how can we fix this ... we should use let in the for loop
because let has a block scope which means for each and evry loop 
iteration, whenever each loop runs this i is a new variable all together
and each time settimeout is run this callback function has a new copy of i with
it its own identity if i with it
*/

function three() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("hula hjula");
}
three();

function four() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("jinja");
}

four();
