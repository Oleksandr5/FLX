let question = confirm("Do you want to play a game?");
while (question) {
    const rangeMin = 0;
    let rangeMax = 5;
    let totalPrize = 0;
    let possiblePrize = 10;
    let yourPrize = 10;
    let attempts = 3;
    let rand = Math.round(Math.random() * rangeMax);
    while (attempts > 0) {
        let yourNamber = Number(prompt("Enter a number from " + rangeMin + " to " + rangeMax + "\n" +
            "Attempts left: " + attempts + "\n" +
            "Total prize: " + totalPrize + "\n" +
            "Possible prize on current attempt: " + possiblePrize + "\n"));
        if (yourNamber === rand) {
            totalPrize += possiblePrize;
            let question2 = confirm("Congratulation! Your prize is: " + totalPrize + ". Do you want to continue?");
            if (question2) {
                rangeMax *= 2;
                yourPrize *= 3;
                possiblePrize = yourPrize;
                attempts = 3;
                rand = Math.round(Math.random() * rangeMax);
            } else {
                break;
            }
        } else {
            possiblePrize = Math.floor(possiblePrize / 2);
            attempts--;
        }
    }
    alert("Thank you for a game. Your prize is: " + totalPrize);
    question = confirm("Do you want to play again a game?");
}
alert("You did not become a millionaire, but can.");