// length 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const length = fruits.length;
console.log(length);

// pop 
fruits.pop();
console.log(fruits); // always pop from last element

// sort 
const flowers = ["Rose", "Tulip", "Sunflower", "Lily", "Daisy"];
flowers.sort();
console.log(flowers);
// output: (5) ['Daisy', 'Lily', 'Rose', 'Sunflower', 'Tulip']  


// push 
fruits.push("kiwi");
console.log(fruits);
const helloWorld = fruits.push("watermelon");
console.log(helloWorld);


// join 
const arr = ["1","2","3","4"];
const arr1 = arr.join(" * ");
console.log(arr1);


// filter, find and some 
const ages = [32, 33, 16, 40];
function checkAdult(x) {
  if(x >= 18){
      return true;
  } else {
      return false;
  }
}
const result = ages.filter(checkAdult);
const result1 = ages.find(checkAdult);
const resultOfSomeMethod = ages.some(checkAdult);
console.log(result);
console.log(result1);
console.log(resultOfSomeMethod);


// includes 
const car = ["BMW", "Ferrari", "Range rover", "Audi"];
const isFerrariIncluded = car.includes("Ferrari");
const isNissanIncluded = car.includes("Nissan");
const isFerrariIncludedInPosition = car.includes("Ferrari", 1);
console.log(isFerrariIncluded);
console.log(isNissanIncluded);
console.log(isFerrariIncludedInPosition);


// slice 
const resultOfSliceMethod = car.slice(1, 3);
console.log(resultOfSliceMethod);
// output: ['Ferrari', 'Range rover']   Slice method excludes the last element


const resultOfSliceMethod1 = car.slice(-4, -1);
console.log(resultOfSliceMethod1);
// output: (3) ['BMW', 'Ferrari', 'Range rover'] 


// keys 
const array = ['a', 'b', 'c'];
const keys = array.keys();

for (const key of keys) {
  console.log(key); 
}
// Output: 0, 1, 2


// shift 
const resultOfShiftMethod = array.shift();
console.log(resultOfShiftMethod);
// output: a 


// unshift 
const resultOfUnshiftMethod = array.unshift("x", "y");
console.log(resultOfUnshiftMethod);
// output: 4      return type number (arr length)


// map 
const arrayMap = [65, 44, 56,70];
const newArr = arrayMap.map(myFunction);


function myFunction (number){
    return number + 10;
}
console.log(newArr);
// output: (4) [75, 54, 66, 80]


// reduce
const arrReduce = [4, 9, 5, 2];


function addition (x1, x2){
  return x1 + x2;
}

const newArrReduce = arrReduce.reduce(addition);
console.log("Result of reduce :", newArrReduce);





// Basic Function 
function isGreaterThan40 (num1) {
  if( num1 > 40){
    return true;
  } else{
    return false;
  }
}
const x = isGreaterThan40(50);
const y = isGreaterThan40(23);
console.log(x);
console.log(y);



// Basic Function ( another way of func defined )
const isLessThan40 = function (num1) {
  if( num1 < 40){
    return true;
  } else{
    return false;
  }
}
const value = isLessThan40(23);
console.log(value);

// Arrow Func 
const isEquals20 = (num1) => {
  if( num1 == 20){
    return true;
  } else{
    return false;
  }
}
const value1 = isEquals20(20);
console.log(value1);

const myFunctions = (a, b) => a * b;
const resultOfArrowFunc = myFunctions(4, 5);
console.log(resultOfArrowFunc);


// Looping arr element

const fruitsAll = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i<fruitsAll.length; i++){
  console.log(fruitsAll[i]);

}
// output :
// Banana
// Orange
// Apple
// Mango

// callback fun 
function mainFunction(callback) {
  console.log("Performing operation");
  
  setTimeout(function() {
    callback("Operation complete");
  }, 1000);
}

function callbackFunction(result) {
  console.log("Result: " + result);
}

mainFunction(callbackFunction);

// output:
// Performing operation
// Result: Operation complete