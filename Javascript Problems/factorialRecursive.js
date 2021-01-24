function factorial(number) {
    if (number == 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1); //n! = (n - 1)! * n
    }
}
var result = factorial(6);
console.log(result);