var marks = [68, 45, 54, 76, 12, 89, 92];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is :", max);