// swap with temp

var a = 5;
var b = 7;
console.log("before swap: a =", a, " b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, " b =", b);

// swap without temp

var x = 4;
var y = 6;
console.log("before swap: x =", x, " y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, " y =", y);

// swap without temp 

var p = 3;
var q = 9;
console.log("before swap: p =", p, " q =", q);
[p, q] = [q, p];
console.log("After swap: p =", p, " q =", q);