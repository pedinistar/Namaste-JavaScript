// why do we need to remove even listeners

/*event listeners are heavy, means it takes memory
and whenever we attach an event listener , it forms
a closure.
and even when the callstack is empty, but still 
this program is not freed up this memory, taken 
by the variables inside the listeners.*/
// thus we remove event listeners when we dont
// want them cz they are heavy

// page will slow down bcz of it
