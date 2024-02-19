//⭐ what if i put the declaration at line number 5 just before the return
//🌿 ans : it will still form a closure and still print 10
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}

outer();

//⭐ what if we change var to let what will be the diffrence
//🌿 ans it will still give 10
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}
// here we can't access this let out side of the function as it is block scoped but it can still be accesed inside the function
outer()();

// ⭐ what if we give outer functio a parameter, will the paramenter be acceseble by the inner function
// 🌿 yes it will be because here b parameter is a part of outer function and can be accessed inside the function
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}

var close = outer("hellow ");
close();

// ⭐ what if your outer function is nested inside another function will inner function will have the access to the environment of the outer most function as well
// 🌿 ye it will have access to the environment of both outer and outer most function
function outerMost() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

var close = outerMost()("hulla"); // when this outermost is called then it returns the outer function and this outer function when called with a parameter b so it returns the inner function then we call it too
close();
