function a() {
  var b = 10;
  c();
  function c() {}
}

a();
console.log(b);

// when we run this program a GLOBAL EXECUTION CONTEXT is created and it is put on to the CALL STACK
// and this GEC has memory and code section in it.... at first it will try to assign values to the global variables and functions
// first a: {...}
// after that it will envoke a function and what happens when we do so , a new execution context is created
// now this execution context will reserve memory for b and c
// again an execution context will be created for c

//so when ever a execution context is created a LEXICAL ENVIRONMENT IS ALSO CREATED
//⭐LEXICAL eNVIRONMENT IS THE LOCAL MEMORY ALONG WITH THE LEXICAL ENVIRONMENT OF IT'S PARENT⭐
// LEXICAL MEANS HEIRARCHY
