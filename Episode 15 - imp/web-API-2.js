console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});
console.log("End");

/*
whenever we run a js code, the global execution 
context is created and pushed inside the call
stack.

now the code will execute line by line

so the first line it sees the console log start
and it goes to the console web api and it calls 
console() web api method and then it prints start
on the console

now code will move to the next line

now an event listener is attached to the btn
now what is a event listener, this add event listener
is another super power given by the browser to the 
javascript engine through the window object in
form of a web api which is the DOM api.

so whenever you do doucment ., so it is basically 
calling dom api which is basically which then
fetches something from DOM [doucment object model]

if you put .addeventlistener it also registers a
callback on an event and that event is click

what it will do is , inside this web api environment
, a callback will be registered and this call back 
is the cb and an event is attached it it and the 
event is the click event , this is known as 
registering a call back

after that console "end" logs end in the console

now we have nothing more to execute know so the 
global execution context pops off the call stack

but this event handler will stay in the web api
environment until and unless we explicitly 
remove that event listner or we like close 
the browser

so this registered call back method inside the 
web api environment just sits over here and in
the whole hope of someday user will click on 
the button and this call back method will 
move into the call stack to execute

when the user clicks on the button this 
call back method is then pushed inside the
call back queue and and it waits over here 
for it's turn to be executed


-------------------------------------
EVENT LOOP has only one job , it continuously
monitor the call stack as well as the call
back queue

it takes the functio sittin ginside the call 
back queue and pushes it inside the call stack


after that call back method is then quickly 
executed
*/
