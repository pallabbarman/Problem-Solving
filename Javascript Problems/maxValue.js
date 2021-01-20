var num1 = 450;
var num2 = 350;
var num3 = 750;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("Number 1 is bigger");
    }
    else {
        console.log("Number 3 is bigger");
    }
}
else {
    if (num2 > num3) {
        console.log("Number 2 is bigger");
    }
    else {
        console.log("Number 3 is bigger");
    }
}

// using built in function

var max = Math.max(num1, num2, num3);
console.log(max);