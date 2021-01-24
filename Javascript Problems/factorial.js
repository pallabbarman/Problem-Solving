function factorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);
