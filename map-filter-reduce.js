// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿
/* Thus MAP individually performs an operation on each of the array's items and then gives a new array. */
// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿

const arr = [5,1,3,2,6];

// Double = [10,2,6,4,12];
// Triple = [15,3,9,6,18];

function double(x){
  return x*2
}

const output = arr.map(double)
console.log(output);    // [ 10, 2, 6, 4, 12 ]

// OR

const output2 = arr.map(function(item){
  return item*2
})
console.log(output2);   // [ 10, 2, 6, 4, 12 ]





// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿
/* Thus FILTER filters out the values from array. */
// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿

const arr2 = [5,2,4,1,5,6,3];

function isOdd(x) {
  return x%2;
}

const output3 = arr2.filter(isOdd)
console.log(output3);   // [ 5, 1, 5, 3 ]

const output4 = arr2.filter((x) => x>4)
console.log(output4);   // [ 5, 5, 6 ]






// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿
/* Thus REDUCE is used when you have to take all the values of an array and come up with a single value out of them. */
// 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿

const arr3 = [2,3,4,5,6,7,8,9,1]

function findSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}

console.log(findSum(arr3));

const sum = arr3.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc;
},0)
// cur is the each element of the array [current values]
// the second parameter is 0 here is similar to the let sum = 0; as we know sum is representing acc. the 0 here is the initial value of the acc
console.log(sum);



function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
      max = arr[i];
    }
  }
  return max
}

console.log(findMax(arr3));

const max = arr3.reduce(function (acc, cur) {
  if (cur > acc) {
    acc = cur;
  }
  return acc
},0)
console.log(max);






const bts = [
  { firstName: "Namjoon", lastName: "Kim", age: 28 },
  { firstName: "Seokjin", lastName: "Kim", age: 29 },
  { firstName: "Yoongi", lastName: "Min", age: 29 },
  { firstName: "Hoseok", lastName: "Jung", age: 28 },
  { firstName: "Jimin", lastName: "Park", age: 26 },
  { firstName: "Taehyung", lastName: "Kim", age: 26 },
  { firstName: "Jungkook", lastName: "Jeon", age: 24 }
];


// Full Names of all
const fullNames = bts.map(function(person){
  const fullName = person.firstName + " " + person.lastName;
  return fullName
})
console.log(fullNames);
/*
[
  'Namjoon Kim',
  'Seokjin Kim',
  'Yoongi Min',
  'Hoseok Jung',
  'Jimin Park',
  'Taehyung Kim',
  'Jungkook Jeon'
]
*/

// or
const fullNames2 = bts.map( person => person.firstName + " " + person.lastName)
console.log(fullNames2);


// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// now we have to find out how many user has perticular age
// { 26 : 2, 75: 1}

const particularAge = bts.reduce(function(acc, curr){
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1
  }
  return acc;
}, {})
console.log(particularAge);
// initial value of acc will be empty object {}



// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// first name of all whose age is less than 28
// FUNCTION CHAINING
const firstNameOfAllWhoseNameIsLessThan28 = bts.filter(function(elem){
  return elem.age < 28
}).map(elem => elem.firstName)
console.log(firstNameOfAllWhoseNameIsLessThan28);


// using reduce
const youngerThan28 = bts.reduce(function (acc, curr) {
  if (curr.age < 28) {
    acc.push(curr.firstName);
  }  
  return acc
},[])
console.log(youngerThan28);