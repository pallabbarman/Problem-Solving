function arraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 52, 31, 98, 57, 175, 64];
var result = arraySum(numbers);
console.log("Totat of the numbers:", result);