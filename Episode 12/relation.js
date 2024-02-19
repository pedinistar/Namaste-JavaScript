// relation b/w garbage collection , memory leaks and closures?
/*
they are related
*/

function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}
// now this function b forms a closure with this variable a
// and when it is returned
a();
// after this execution so after that x could have been garbage collected
// so it should go out of the memory because it is no longer needed
// but if we form a closure
var y = a();
y();

// thus x's meory is not freed
