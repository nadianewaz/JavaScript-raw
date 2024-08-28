const fruits = ["Banana", "Orange", "Apple", "Mango"];
const length = fruits.length;
console.log(length);

fruits.pop();
console.log(fruits); // always pop from last element

fruits.push("kiwi");
console.log(fruits);
const helloWorld = fruits.push("watermelon");
console.log(helloWorld);

const arr = ["1","2","3","4"];
const arr1 = arr.join(" * ");
console.log(arr1);


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
console.log(result);
console.log(result1);

const car = ["BMW", "Ferrari", "Range rover", "Audi"];
const isFerrariIncluded = car.includes("Ferrari");
const isNissanIncluded = car.includes("Nissan");
const isFerrariIncludedInPosition = car.includes("Ferrari", 1);
console.log(isFerrariIncluded);
console.log(isNissanIncluded);
console.log(isFerrariIncludedInPosition);


