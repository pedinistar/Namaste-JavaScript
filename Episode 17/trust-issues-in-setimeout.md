# Why we have trust issues with setTimeout()

```JavaScript
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");
```

when we run js code, and global execution context is created and that is pushed inside the call stack
now the code will run line by line
so we will see console log of start so this will print start in the console.
then the code moves on to the next line
now setime out will register this call back inside it inside the web api environment and also starts a timer of 5000 milisecs.

after registration js moves to the next line now end will be printed

now suppose we have one million code lines after the end line which take a lot of time to run
now suppose it takes 10 sec to execute, thus the global execution ocntext will still be busy executing this code
while the time is running

now the gec wount go out until 10 secs and but timer ra nfor 5 sec
and while the global execution context is executing code our timer has already expired

and it has been already pushes inside the callback queue

and now event loop is constantly checking if the call stack is empty or not

now the call back will execute after call stack is empty thus will take more time than given

#### this is also called concurrency model in js
