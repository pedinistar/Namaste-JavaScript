// trying to access a function and a variable before initializing
getName(); // this will show the whole code written inside the function {}    // Namaste India
console.log(x); // we get undefined (a special value which acts as a placeholder until a value is initialzed)

var x = 7;

function getName() {
  console.log("Namaste India");
}

getName();
console.log(x);

// Namaste India
// 7

/* HOISTING - > is a phenomenon in javascript by which you can access the variables and functions
                even before you have initialzed it with out any error */

/*
even before execution execution context is created and memory spaces are given 
~x : undefined
after this code execution will start
~x : 7
*/

/*
undefined means abhi initialize nahi kiya lekin declare kardiya hai
not defined matlab isko to declare tk nhi kiya to value kidr se laun
*/

hujaBi(); // hujaBi is not a function
// why? because function is stored in a varible ... and thus if we declare arrow functions then it wil behave as a variable

var hujaBi = () => {
  console.log("bolo bolo bola ya");
};
