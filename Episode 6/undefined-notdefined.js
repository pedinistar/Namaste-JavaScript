// revise
// javascript runs in a different way, it creates a global execution context and alocates memory to all variables and function even before a single line of code is executed

// undefined
console.log(a); // memory was alocated to a before execution thus it will shouw undefined
var a = 7;
// js alocated memory space to a before this line is executed
/* >Global
     a : undefined
*/
console.log(a); // 7
console.log(x); // no memory is allocated to x thus when we will run it will show not defined

// undefined != empty(not taking space or memory), undefined is a special keyword which takes its space/memory
// and we can see it as a placeholder which is kept for the time being until the variable is assigned some other value

console.log(b); // undefined
var b;
console.log(b); // undefined

// ⭐ Javascript is a loosely typed language/weakly typed language, it means that it doesn't attaches its variables to nay specific datatype
let a = "hi";
a = 10;

// never do this
a = undefined;
// don't assign undefined
