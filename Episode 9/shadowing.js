{
}
/* 
if you have same named variable outside this block, so the variable inside the scope shadows the variable outside the scope 
*/

// SHADOWING
// if you have a same named variable outside this scope, so this varible(which is inside block) shadow's that variable(outside the block)
var a = 100;
{
  var a = 20;
  console.log(a); // 20   // this had a global scope
}
console.log(a); // 20   // this too had a global scope this it changes the
// this is know as SHADOWING

// this is not the case in let
let aa = 100;
{
  let aa = 30;
  console.log(aa); // 30   // this had a block scope
}
console.log(aa); // 100    // this had a script scope

// Global scope -> var
// Script scope -> let and const
// Block scope  -> {}

// ILLEGAL SHADOWING
let z = 20;
{
  // var z = 30; // Identifier 'z' has already been declared
}

// you can't shadow a let using var
// but you can shadow a let using a let
let y = 20;
{
  let y = 30;
}

// imp
// var is function scoped
