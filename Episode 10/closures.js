// CLOSURES
function x() {
  let a = 7;
  function y() {
    console.log(a); // 7
  }
  y();
}
x();

// closure: a function and it's lexical environment/scope together is called as closure🌿
/* Uses of Closures:
🌿Module Design Pattern
🌿Currying
🌿Functions like once
🌿memoize
🌿maintaining state in async world
🌿settimeouts
🌿iterators
🌿and many more.....
*/
