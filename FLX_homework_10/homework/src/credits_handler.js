const value = {
    tax: 0.005,
    keyCard2: 2,
    cardsLimit: 3
};
let valuePutCredits = 3000;
let valueSetTransactionLimit = 600;
let valueTransferCredits = 500;
let valueTakeCredits = 50;

function userCard(index) {
    let cardProperties = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: index
    };

    const addHistoryLogs = function (operationType, credits) {
        let input = {
            operationType,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardProperties.historyLogs.push(input);
    };

    const getCardOptions = function () {
        return cardProperties;
    };

    const putCredits = function (amount) {
        cardProperties.balance = cardProperties.balance + amount;
        addHistoryLogs('Received credits', amount);
    };

    const takeCredits = function (amount) {
        if (amount <= cardProperties.balance && amount <= cardProperties.transactionLimit) {
            cardProperties.balance = cardProperties.balance - amount;
            addHistoryLogs('Withdrawal of credits', amount);
        } else {
            console.error('Not enough money on Your balance or transaction limit is too small!');
        }
    };

    const setTransactionLimit = function (amount) {
        cardProperties.transactionLimit = amount;
        addHistoryLogs('Transaction limit change', amount);
    };

    const transferCredits = function (amount, card) {
        let amountwithTaxes = amount + amount * value.tax;
        if (amountwithTaxes > cardProperties.balance) {
            console.log('Not enough money');
        } else if (amountwithTaxes > cardProperties.transactionLimit) {
            console.log('Transaction limit is too small');
        } else {
            this.takeCredits(amountwithTaxes);
            card.putCredits(amount);
        }
    };

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length > value.cardsLimit) {
            console.log('You have got too many cards');
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(number) {
        return this.cards[number - 1];
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(value.keyCard2);

card1.putCredits(valuePutCredits);
card1.setTransactionLimit(valueSetTransactionLimit);
card1.transferCredits(valueTransferCredits, card2);

card2.takeCredits(valueTakeCredits);
console.log(card1.getCardOptions());