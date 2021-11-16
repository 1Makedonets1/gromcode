// function getSenseOfLife() {
//     console.log (42);
// }

// let res = getSenseOfLife();
// console.log(res);

function getSenseOfLife() {
    return 42;
}

console.log(getSenseOfLife());

function getSguer(num) {
   res =  num * num;
   return res;
}

//test data
console.log(getSguer(5));
console.log(getSguer(10));
console.log(getSguer(2));

//=============================

//function declaration
function printMessage (num) {
    console.log(`I am  ${num}  ears old`)
}

//function expression
const printMessage = function (num) {
    console.log(`I am  ${num}  ears old`)
}

//test data
console.log(printMessage(35));
console.log(printMessage(10));
console.log(printMessage(22));

//=============================

const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber());