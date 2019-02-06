function reverseNumber(value) {
    let x = value.toString().split('').reverse().join('');
    if (value > 0) {
        return parseInt(x);
    }
    return parseInt(x) * (-1);
}
reverseNumber(-987);