var num = 2.49999999999999;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for (var i = 0; i < 10; i++) {

    var randomNum = Math.random() * 6;
    var result4 = Math.round(randomNum);
    console.log(result4);
}
console.log(result, result2, result3);