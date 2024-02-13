function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
  console.log("jini");
}
x();
// js takes this settime out function and it's scope aside with it's timer and then procedes with the rest of the code
// and once that timer is expired it takes that function puts it in the call stack and runs it

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i + 1000);
  }
}
y();
