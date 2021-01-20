function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alien! How are you?";
var forAlien = reverseString(statement);
console.log(forAlien);

// using built in function 
var reverse = statement.split('').reverse().join("");
console.log(reverse)