function isBigger(value1, value2) {
    return value1 > value2;
}
function isSmaller(value1, value2) {
    if (value1 === value2) {
        return false;
    }
    return !isBigger(value1, value2);
}
isSmaller(1, 5);