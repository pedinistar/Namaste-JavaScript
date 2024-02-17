var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

/*
When we will run this code a global execution context is created, its like a big box and 
it has two components, these two componets are memory component and code component.

This execution context is created in two phases:
1. Creation Phase / Memory Creation Phaze
2. Code Execution Phaze

i. in the first phase of memory creation javascript will alocate memory space to all the functions
   and variables 
   -as soon as it goes for line 1
   -n : undefined
   -square : {...} (it stores the whole function code)
   -square2 : undefined
   -square4 : undefined

ii. in the second phase of code execution now once again js will run through this all program
    line by line and it executes the code now, 
    ~at first line
    ~n : 2
    ~from line 2 to 5 there is nothing to execute
    ~now at line 6 a function is envolked thus this envolkation will create a new execution context
    of it's own
            [exc created]
            i. memory phase
                num : undefined
                ans : undefined
            ii. code execution phase  
                num : n
                n : 2 thus num : 2
                ans : n*n -> ans : 4
                [at line 4]
                return tells this function "you are done with your work now", just return the control
                back to the execution context where the function was envolked
            [now this whole execution context will be completely deleted as soon as we return the value]
    ~now control goes to line number 6 -> square2 = 4
    ~again at line 7 a function is envoked a new xecution context is created
          [execution context created]
          i. memory phase
                num : undefined
                ans : undefined
            ii. code execution phase  
                num : 4
                ans : n*n -> ans : 16
                [at line 4]
                again the return comes and as soon as function returns the value ... the execution context 
                is deleted and control shifts to line 7 again
          [execution context deleted]
    ~square4 : 16    
*/

/*
js handles everything to manage this execution context creation and deletion and the control it
manages a stack.
this is known as the CALL STACK
call stack is like a stack
and everytime at the bottom of the stack we have our global excution context
and whenever a new function is invoked and new exc is created so this new one is push into the stack
and when it delets then exc is poped out of the stack
*/

// Call stack maintains the ORDER OF EXECUTION of execution contexts.
/*
> Call Stack [other names of call stack]
1. Execution Context Stack
2. Program Stack
3. Control Stack
4. Runtime Stack
5. Machine Stack
*/
