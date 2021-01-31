// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// another function 
// const doubleIt = function myFun(num) {
//     return num * 2;
// }

// arrow function 
const doubleIt = num => num * 2;
console.log(doubleIt(5));

const add = (x, y) => x + y;
const result = add(5, 7);
console.log(result);

const multiply = (a, b) => {
     const sum = a + b;
    const sub = a - b;
    const mul = sum * sub;
    return mul;
}
console.log(multiply(10, 5));