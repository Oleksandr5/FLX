function addOne(x) {
    return x * 2;
}
function pipe() {
    let massif = Array.from(arguments);
    let result = massif[0];
    for (let i = 1; i < massif.length; i++) {
        result = massif[i](result);
    }
    return result;
}
pipe(3, addOne, addOne);