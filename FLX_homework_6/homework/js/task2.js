var amount = prompt ("Enter the amount of money: ", "0");
var discount = prompt ("Enter the discount: ", "0");

if (isNaN(amount) || isNaN(discount)) {
    alert ('Invalid input data');
} else {
    if (amount >= 0 && amount <= 9999999 && discount >= 0 && discount <= 99) {
        
        var price = amount - amount*discount/100;
        var saved = amount - price;
        alert (
            "Price without discount: " + amount + ";\n" + 
            "Discount: " + discount + "%;\n" +
            "Price with discount: " + Math.floor(price*100)/100 + ";\n" +
            "Saved: " + Math.floor(saved*100)/100 + ";"
        );            
    } else {
        alert ("Invalid input data");
    }
}