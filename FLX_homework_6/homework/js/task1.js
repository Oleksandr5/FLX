var a = prompt("Enter the value a =", "0").trim();
var b = prompt("Enter the value b =", "0").trim();
var c = prompt("Enter the value c= ", "0").trim();
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
} else {
    if (a === "0" || a.length === 0 || b.length === 0 || c.length === 0) {
        alert('Invalid input data');
    } else {
        var D = Math.pow(b, 2) - 4 * a * c;
        if (D > 0) {
            var x1 = (-b + Math.sqrt(D)) / 2 * a;
            var x2 = (-b - Math.sqrt(D)) / 2 * a;
            alert("Result: x1 = " + x1 + ", x2 = " + x2 + ".");
        } else if (D === 0) {
            var x = -b / 2 * a;
            alert("Result: x = " + x + ".");
        } else {
            alert("no solution");
        }
    }
}