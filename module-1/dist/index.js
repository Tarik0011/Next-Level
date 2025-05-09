"use strict";
// Function to format a string to upper or lower case
function formatString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
// Function to filter items by rating >= 4
function filterItemsByRating(items) {
    var filteredItems = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].rating >= 4) {
            filteredItems.push(items[i]);
        }
    }
    return filteredItems;
}
// Function to merge multiple arrays
function mergeArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var mergedArray = [];
    for (var i = 0; i < arrays.length; i++) {
        for (var j = 0; j < arrays[i].length; j++) {
            mergedArray.push(arrays[i][j]);
        }
    }
    return mergedArray;
}
// Constructor function for Vehicle
function Vehicle(make, year) {
    this.make = make;
    this.year = year;
}
Vehicle.prototype.getInfo = function () {
    return "Make: " + this.make + ", Year: " + this.year;
};
// Constructor function for Car, inheriting from Vehicle
function Car(make, year, model) {
    Vehicle.call(this, make, year);
    this.model = model;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getModel = function () {
    return "Model: " + this.model;
};
// Function to process a value based on type
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
// Find the most expensive product
function findMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    var mostExpensiveProduct = products[0];
    for (var i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensiveProduct.price) {
            mostExpensiveProduct = products[i];
        }
    }
    return mostExpensiveProduct;
}
// Enum-like object for days
var Day = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6,
};
// Function to determine if a day is a weekday or weekend
function determineDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// Async function using Promise
function squareNumberAsync(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}
//Testing the functions and classes
console.log(formatString("Hello World", true));
console.log(formatString("Hello World", false));
console.log(filterItemsByRating([
    { title: "Item A", rating: 3 },
    { title: "Item B", rating: 4 },
    { title: "Item C", rating: 5 },
]));
console.log(mergeArrays([1, 2], [3], ["a", "b"], [true]));
var myCar = new Car("Ford", 2022, "Mustang");
console.log(myCar.getInfo());
console.log(myCar.getModel());
console.log(processValue("OpenAI"));
console.log(processValue(7));
console.log(findMostExpensiveProduct([
    { title: "Mouse", price: 25 },
    { title: "Keyboard", price: 50 },
    { title: "Monitor", price: 150 },
]));
console.log(determineDayType(Day.Monday));
console.log(determineDayType(Day.Saturday));
squareNumberAsync(6)
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.error(err.message); });
squareNumberAsync(-1)
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.error(err.message); });
