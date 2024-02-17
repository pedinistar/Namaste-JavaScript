// scope is directly related to lexical environment
function a() {
  console.log(b); // can we access b inside the function? yes
  function c() {
    console.log(b); // can we acccess b here? yes
  }
}
var b = 10;
a();
c();

// when js will come to line 2 then it will serach for b in the local memory, and it is not there so then it

// SCOPE -> scope means where you can access a specific variable or a function in our code
// what is the scope of variable b , which means where can i access b
