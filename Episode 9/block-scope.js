/* 
What is a block in js?
Block is defined by {} 
Block is also known as Compound Statement
A block is used to combine multiple javascript statements into one group
*/
{
  var a = 10;
  console.log(a);
}
/* we need to group these statements together so that we can use multiple statements in a place where js is expecting a one statement */

// if (true)  // this gives a sytax error because if is expecting a statement after if(true).
if (true) true;
// to write multiple statements
if (true) {
  console.log("hi");
  let a = 3;
}

// Block Scope
/*
Block scope means what all variables and functions we can access inside this block {}
*/

{
  var a = 10;
  let b = 20;
  const c = 30;
}

/*
> Block
b: undefined
c: undefined
> Global
a: undefined
*/
// let and const are block scoped
// we cant access let and const outside the scope

{
}

// THIS IS A "BLOCK" WHICH IS ALSO KNOWN AS "COMPOUND STATEMENT"

/* we group multiple statements together in a block so that we can use it where javascript expects us to put one statement
like:
if (true)  // SyntaxError
this means js expects us to put a statement in front of if(true) */
if (true) true; // this is a perfectly valid one statement, ubt what if we want to write multiple statements,
if (true) {
  // we can only do that by grouping them together, so we can use block to group the statements.
  var a = 10;
  console.log(a);
}
if (true) console.log("yahuu"); // we can write like this also but if we want to have multiple statements then we need to use block scope

// This is a Block and these are its uses.
// {} is a block also known as compound statement and it is used to group multiple statements together.

// BLOCK SCOPE
// Block scope means what all the variables and functions we can access inside this block.
{
  var a = 10;
  let b = 20;
  const c = 30;
}

// BTS
// - block
//   b: undefined
//   c: undefined
// - Global
//   a: undefined

// a is hoisted in the global scope
// these are hoiested at a reserved memory space of block

// THUS LET AND CONST ARE BLOCK SCOPED THAT MEANS THEY ARE STORED IN A SEPARATE MEMORY SPACE WHICH IS RESERVED FOR THIS BLOCK.

console.log(a); // 10
// console.log(b);  // b is not defined
// console.log(c);     // c is not defined
// now after execution we can't access b and c because they are only accessable inside the block scope.
// but we can access a because it is in the global scope
