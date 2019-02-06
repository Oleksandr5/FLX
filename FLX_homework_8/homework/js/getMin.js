function getMin() {
    let massif = Array.from(arguments);
    let minNumber = massif[0];
    for (let i = 0; i < massif.length; i++) {
        if (massif[i] < minNumber) {
            minNumber = massif[i];
        }
    }
    return minNumber;
}
getMin(1, -5, 10);