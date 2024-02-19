// settimeout and closures interview questions

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("bolo bolo");
}

x();
/*
after 3 sec it will print value of i
many peole think that this settimeout runs over here itself
no!
now if i write bolo bolo 
you will see that bolo bolo is printed after that 1 is printed

many think that js will wait for 3 sec here and then will
print i and then will print bolo bolo
no man!

but here it prints bolo bolo then waits for 3s and then runs
function and then prints the i

so many think that js settimeout will wait over here  no!
js doesn't wait for anyone

bolo bolo 
1

this is printing like this because 
1. settimeout function forms a closure
2. so this function remembers the refrence to i
3. and forms a closure
4. so whereever this function goes it takes the reference of i along with it
5. and settimeout takes this callback function and stores it into
   some place and attaches a timer of 3s to it
6. and it stores it somewhere 
7. then js proceeds to next line and prints bolo
8. and once the timer expires then it puts that function to the call stack
9. and prints the value of i
10. this is how settimeout works
*/
