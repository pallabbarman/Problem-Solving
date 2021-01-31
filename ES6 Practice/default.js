function add(num1, num2) {
    return num1 + num2;
}
const total = add(15, 17);
console.log(total);

// default value 
function add(num1, num2 = 20) {
    return num1 + num2;
}
const total1 = add(15);
console.log(total1);