/*
⭐What is a closure in js?
🌿A function along with a reference to it's outer environment, together forms a closure.
  In other words we can say that closure is a combination of a function and it's lexical scope
  bundled together forms a closure.
  [explain more]
  Each and every function in javascript has access to it's outer lexical environment that means 
  like access to the variables and functions which is present in the environment of it's parent.
  So even when this function is executed in some other scope not in ot's original scope, it still 
  remembers it's outer lexical environments where it was originally present in the cod.
  
🌿example
*/

function outer() {
  // if i create a variable in the outer environment
  var a = 10;
  function inner() {
    // in js this inner function has access to its outer environment
    // this inner function has access to a
    console.log(a); //10 we can access it
  }
  // even if i return this inner function
  return inner;
}
// so this inner function forms a cllosure with it's outer environment

outer()();
// it will still print 10. so even if it is executed some where out(not inside its lexical scope even after that)
// it stiill remmembers the value of a

/*
⭐ what is this parenthesis for ()()
🌿 use of double parenthesis
    it is used here to call the inner function
    outer()
    will return inner function
    and 
    outer()()
    will call that inner function

    we can do like this laso 
    var close = outer()
    close()
    this is same as
    outer()()
*/
