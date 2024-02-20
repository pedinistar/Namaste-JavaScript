## fetch()

```JavaScript
console.log("Start")

setTimeout(function cbT(){
  console.log("CB Timeout")
}, 5000)

fetch("https://api.netflix.com")
.then (function cbF(){
  console.log("CB Netflix")
})

console.log("End")
```

fetch basically goes and requests an api call and this fetch function returns a promise and we have to pass a call back function which will be executed once this promise is resolved

a global execution context is created, pushed into the call stack, the code is executed line by line

we do a console.log of start, it prints it into the console

now it moves to the next line

the settime out will register call back function in the web api so we will have this cbt inside registered inside the web api environment and we also have our 5000 timer started

while it starts js goes to next line

and now we have a fetch function next this fetch function is again a web api which is used to make network calls
it also registers callback function to the web api's environment cbf is registered here

now we have 2(cbt and cbf) functions sitting inside the web api environment with each of their timers started
cbt functio nis waiting for the timer to expire so that it can be pushed into callback queue and cbf function is waiting for data to be returned from this netflix servers

so this fetch function will make a network call to the netflix server
and this netflix servers will return the data back to fetch and once we get the data over here this cbf callback function will now be ready to be executed

--
now assume that netflix servers returns the data with in like 50milli sec now this cbf call back function is ready to be executed this cbf callback function will be pushed inside call back queue, this is what we expect right!

but no! this will not happen

--

#### MICROTASK QUEUE IN JS

just like the call back queue , there is something like microtask queue, this queue is exactly similar to the call back queue, but IT HAS HIGHER PRIORITY

what ever functions fall into microtask queue are executed first and after wards call back queue is seen

thus the function cbf , in case of promises, in case of these network calls will go to this micro task queue.

what comes inside micro task queue , this function cbf which was a call back function in case of promises will go to mixrotask queue

and again the job of event loop to keep on checking whether the call stack is empty or not and when the call stack is empty then it gives the chance to all these functions over here in the mt queue to be executed inside the call stack

so we were still executing this code

```JavaScript
fetch("https://api.netflix.com")
.then (function cbF(){
  console.log("CB Netflix")
})
// millions of lines of code
```

we already got the response from netflix servers within 50 milisecs

suppose we have thousands of lines and it takes some time to execute these but we already have cbf call back function in micro task queue waiting for the gec to pop out so that it can be executed inside the empty call stack

meanwhile we are runnig the millions of line of code the timer also expires of the cbt function
now how will it be executed , it will go to the callback queue

now the millions lines of code is still executing and 5s pass by of cbt

now both these functions are waiting to be executed inside their respective queue's

now the job of event loop is to continuously check whether the call stack is empty or not , if it's empty then schedule these 2 tasks

so suppose these millions line of code are done executing and we reach this line console.log("End")
now the end will be printed

```
Start
End
```

now as there is nothing to execute now the global execution context is poped out and call stack is now empty

event loop also sees the the tasks pending inside the 2 queues, but because the priority of MTQ is more than CBQ so cbf function is given the chance to get inside the callstack

now again cbf creates a execution context of its own and the code inside it will run line by line

```JavaScript
fetch("https://api.netflix.com")
.then (function cbF(){
  console.log("CB Netflix")
})
```

now it will console log "CB Netflix"

```
Start
End
CB Netflix
```

now cbf execution context is now popped out of the call stack

meanwhile this all is happening eveny loop is monitoring the call stack and waiting for it to get empty again so that cbt could execute

now when call stack is empty now the cbt function goes inside the call stack and creates an execution context and now

```JavaScript
setTimeout(function cbT(){
  console.log("CB Timeout")
}, 5000)
```

now this will be executed

```
Start
End
CB Netflix
CB Timeout
```

now again call stack is empty.😭😵‍💫

## Interview Question

#### what can come inside these micro task queue?

all the call back functions which come through promises as well as mutation observer ,will go inside

### Mutation Observer

this keeps on checking if there some mutation in the dom tree or not. if there is some mutation in dom tree it can execute some call back function

## Call back Queue is also known as Task Queue

## imp

suppose there are 3 pendingtasks inside the micro task queueand 1 inside the call back queue.. so the event loop will only give opportunity to the call back wale ke andr ka function ...only when all the tasks inside the microtask queue are executed

## Starvation

just bcz the event loop gives first priority to the microtask queue so suppose the micro task function creates a new task inside micro task queue and go on...so the task inside CBQ will never get a chance to get executed

in this case this know as STARVATION : STARVATION OF THE TASK INSIDE THE CALLBACK QUEUE
