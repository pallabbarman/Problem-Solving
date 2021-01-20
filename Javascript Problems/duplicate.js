var num = [3, 6, 7, 8, 5, 4, 3, 5, 7, 11, 57, 65, 11];
var uniqueNum = [];
for (var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index == -1) {
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);

