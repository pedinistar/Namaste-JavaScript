/*
-setTimeout()
-DOM APIs
-fetch()
-local Storage
-console
-location
*/

// these are the part of browser and are known as WEB API'S

// we ca use it using GLOBAL OBJECT that is "window"
// we can use the web api's using window keyword

console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");

/*
whenever you try to execute any js code a global execution 
is created and pushed inside the call stack.

now this whole code will run line by line

first line : this will use console api
when you write console .log over here it basically calls 
this web api and it internally makes a call to actually 
modify or log something inside the console.

second line: the settime out will go and call the web api
and this gives us acess to this timer feature of this 
website. and it takes a callback function and some delay
so when you pass this call back function to this settimeout
it basically registers a callback.

it registers a call back cb over somewhere and because we
also register the delay, it also starts the timer.

and the js code moves to the next line and sees this line
and logs "End" to the console.

now timer is still running...counting 
and we are done with executing all our code and 
once we are done with executing the global execution context
pops out of the call stack


and meanwhile all this is happening , the timer is still 
running iit is doing a countdown of 5,4,3,2,1 and as soon 
as timer expires, this call back function needs to be executed


and because we know all of the code in js is executed
inside this call stack we some how need this call back function
inside this call stack.

but it canot direclty go inside the call stack then how, it will
go to the call stack throgh this call back queue. 

call back function after the timer expiration is moves inside
the callback queue. and the event loop over here...
the job of the event loop is to check the this call back queue
and puts this functions of this call back queue into the call stack


so the EVENT LOOP here acts like a gate keeper and checks whether 
we have something in the call back queue and if we have something
, it just pushes that inside the call stack

as soon as the timer expires , the call back function is pushed
inside the call back queue and event loop checks if there
is something inside the call back queue and push the call back function
into the call stack for execution

and call stack quickly executes the call back function how?
it creates a execution context of cb an druns it line by line

it sees log of "call back", it goes to the console and the api 
logs it in the console

*/
// CALLBACK QUEUE
// EVENT LOOP
