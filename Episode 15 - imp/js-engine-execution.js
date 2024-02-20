/* js is a syns=cronous single threaded language,
it has one call stack and it can only do one
thing at a time.

this call stack is present inside the js engine
and all the code of the js is executed inside this 
call stack.
*/

function a() {
  console.log("a");
}
a();
console.log("End");
/*
whenever any js program is run a Global Execution 
Context is created and this global execution context
is pushed inside the call stack,

now in the GEC, the code will run line by line here,
first line has function defination of a
so a will be alocated memory
a: {...}
after that comes function envokation, so 
in this case a new execution context is created for 
this function a() to execute the code of th function 

and this newly created xecution context then gets 
pushed inside the call stack.

so now a will be inside the call stack, so now
the code inside a will be executed line by line
so now a will be printed on the console 

now this new execution context created ofr a will 
be poped out of the call stack and control again 
comes to the global execution context

now it comes to the next line it executes
and prints end on the console

after this we dont have any thing to execute
so now the global execution context also gets 
out of the call stack.
*/
