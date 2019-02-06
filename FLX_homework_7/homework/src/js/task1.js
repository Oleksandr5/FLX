let login = prompt("Please, enter login").trim();
if (login.length === 0 || login === null) {
    alert("Canceled.");
} else {
    if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else {
        if (login === "User") {
            let password1 = prompt("Please, enter password");
            if (password1 === "UserPass") {
                let date1 = new Date();
                let hours1 = date1.getHours();
                if (hours1 < 20) {
                    alert("Good day, dear User!");
                } else {
                    alert("Good evening, dear User!");
                }
            } else {
                alert("Wrong password");
            }
        } else if (login === "Admin") {
            let password2 = prompt("Please, enter password");

            if (password2 === "RootPass") {
                let date2 = new Date();
                let hours2 = date2.getHours();
                if (hours2 < 20) {
                    alert("Good day, dear Admin!");
                } else {
                    alert("Good evening, dear Admin!");
                }
            } else {
                alert("Wrong password");
            }
        } else {
            alert("I don’t know you");
        }
    }
}