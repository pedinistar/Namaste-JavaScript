// working of functions

var x = 1;
a(); // 10
b(); // 100
console.log(x); // 1

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/*
a global execution context is created 
i. first phase
    x : undefined
    a : {...}
    b : {...}
ii. second phase
    x : 1
    a : function will be evoked
        [new execution context is created and is pushed into the call stack]
          i. first phase
              x : undefined
          ii. second phase
              x : 10
              console.log (x) will search the local memory space space and prints down the value 10
    b : function will be evoked
        [new execution context is created and is pushed into the call stack]
          i. first phase
              x : undefined
          ii. second phase
              x : 100     
              console.log (x) will search the local memory space space and prints down the value 100  
*/
