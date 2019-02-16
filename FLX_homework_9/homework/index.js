// Task 1
function findTypes() {
    let resultArray = [];
    let args = Array.from(arguments);
    for (let i = 0; i < args.length; i++) {
        resultArray.push(typeof (args[i]));
    }
    return resultArray;
}
findTypes(null, 5, "hello");

// Task 2
function executeforEach(args, func) {
    for (let i = 0; i < args.length; i++) {
        func(args[i]);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el);
});

// Task 3
function mapArray(args, func) {
    let resultArray = [];
    executeforEach(args, function (el) {
        resultArray.push(func(el));
    });
    return resultArray;
}
mapArray([2, 5, 8], function (el) {
    return el + 3;
});

// Task 4
function filterArray(args, func) {
    let resultArray = [];
    executeforEach(args, function (el) {
        if (func(el)) {
            resultArray.push(el);
        }
    });
    return resultArray;
}
filterArray([2, 5, 8], function (el) {
    return el > 3;
});

//Input data for task 5 and 6.
let inputData = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

// Task 5
function getAmountOfAdultPeople(data) {
    return filterArray(data, function (el) {
        return el.age > 18;
    }).length;
}
getAmountOfAdultPeople(inputData);

// Task 6
function getGreenAdultBananaLovers(data) {
    let filter = filterArray(data, function (el) {
        return el.age > 18 &&
            el.favoriteFruit === "banana" &&
            el.eyeColor === "green";
    });
    return mapArray(filter, function (el) {
        return el.name;
    });
}
getGreenAdultBananaLovers(inputData);

// Task 7
function keys(obj) {
    let resultArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultArray.push(key);
        }
    }
    return resultArray;
}
keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

// Task 8
function values(obj) {
    let resultArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultArray.push(obj[key]);
        }
    }
    return resultArray;
}
values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

// Task 9
function showFormattedDate(date) {
    const month = ["Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];
    return "Date: " + date.getDate() + " of " + month[date.getMonth()] + ", " + date.getFullYear();
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task 10
function isEvenYear(date) {
    return date.getFullYear() % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//Task 11
function isEvenMonth(date) {
    return (date.getMonth() + 1) % 2 === 0;
}
isEvenMonth(new Date('2019-01-27T01:10:00'));