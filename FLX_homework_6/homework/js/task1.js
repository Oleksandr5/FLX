var a = prompt ("Enter the value a =", "0");
var b = prompt ("Enter the value b =", "0");
var c = prompt ("Enter the value c= ", "0");
if (a===0 || а===null || b===null || c===null || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert ('Invalid input data');
} else {
    var D = Math.pow(b,2)-4*a*c;
    if (D > 0) {
        var x1 = (-b + Math.sqrt (D))/2*a;
        var x2 = (-b - Math.sqrt (D))/2*a;
        alert ("Result: x1 = " + x1 + ", x2 = " + x2 + ".");
    } else if (D === 0) {
        var x = -b/2*a;
        alert ("Result: x = " + x + ".");
    } else {
        alert ("no solution");
    }       
}