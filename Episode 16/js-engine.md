## JavaScript RunTime Environment

Js Engine is NOT a MACHINE.
Js enngine is nothing but a js program.

# JS ENGINE

js engine takes code as the input, the human readable code what we write in js. And this code now goes through 3 major steps include:

1. PARSING
2. COMPILATION
3. EXECUTION

during the parsing phase the code which you write is broken into TOKENS
for example:

```JavaScript
let a = 10;
```

here let is a token, a is another token, = is another token, and 10 is another token
there is something known as SYNTAX PARSER: it's job is to basically take the code and convert it into an AST [Abstract Syntax Tree]

// a website to generate ast: astexplorer.net

Now the AST which is generated is then passed over to the COMPILATION PHASE,

js has something known as "JIT Compilation",

before that let us understand what is an interpreter, and compiler. and is js a compiler or interpreter language.

Lets see what is an interpreter, this interpreter takes the code and it starts executing code line by line in the order.
while on the other hand compiler , comiples the whole code before executing so the code is compiled and a new code is generated which is an oprimized version of this code and then it is executed.

compiler has more efficiency.
interpreter has more speed/fast.

JS CAN BEHAVE AS AN INTERPRETED LANGUAGE ASA WELL AS A COMPILED LANGUAGE.

JIT COMPILER USES BOTH INTERPRETER AND COMPILER TO EXECUTE THE CODE.

now the phase 2 and 3 that is compilation and execution takes place simultaniously. after parsing we got ast and now this ast goes to the intepreter. now this interpreter converts our high level code into the byte code and then this byte code goes to the execution step and while it is doing so it takes the help of the cimpiler to optimize the code. so compiler talks to the interpreter and while the code is interpreted line by line compiler also tries to optimize the code as much as it can

execution can't be possible without two componets of js engine which are the memory heap and call stack
