// what if we had a global variable with conflicyed name
// what if we had what is on line number 9 at line number 13
function outerMost() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
// in this case both a's are different th inner function will still print 10 as it remmembers its lexical scope and its doesn't have to anythin giwth the global a
// first of all inner function will check theh first lexical scope of its parent , then its parent's parent like this
// but but if we didn't had the line 9 then it would have printed 100
var close = outerMost()("hulla");
close();
