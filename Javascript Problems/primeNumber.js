function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "Not a prime number";
        }
    }
    return "This Number is prime number";
}
var result = isPrime(61);
console.log(result);