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

const arr2 = [];


for (let i = 0; i<ages.length; i++){
    console.log(ages[i]);
    const hello = checkAdult(ages[i]);
    if(hello == true){
        // console.log("yes");
        arr2.push(ages[i]);
    } else {
        console.log("no");
    }
}
console.log(arr2);
const result = ages.filter(checkAdult);
console.log(result);

