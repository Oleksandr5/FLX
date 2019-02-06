function reverseNumber(value) {
    let x = value.toString().split('').reverse().join('');

    return parseInt(x) * Math.sign(value);
}
reverseNumber(987);
reverseNumber(-987);