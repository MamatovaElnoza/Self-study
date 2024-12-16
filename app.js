"use strict";
console.log("Hello World!");
//Arrays
const numbers = [1, 2, 3];
const anotherNumbers = [1, 2, 3];
//Any
const person = { firstname: "Elnoza" };
//Object
const person2 = { firstname: "Elnoza" };
//Parametres
function add1(a, b) {
    return a + b;
}
console.log(add1(2, 3));
// console.log(add('Ulugbek', 25)); // X Error
//Return Type
function greeting(firstname) {
    return `Hello, ${firstname}!`;
}
console.log(greeting("Elnoza"));
//Void
function printGreeting(firstname) {
    console.log(`Hello, ${firstname}!`);
}
printGreeting("Islom");
function add(a, b) {
    return a + b;
}
add("Hello", "Steve");
add(10, 20);
function greet(person) {
    return `Hello, ${person.name}!`;
}
//OOP
class Person {
    constructor(firstname, nationality, age1) {
        this.firstname = firstname;
        this.nationality = nationality;
        this.age1 = age1;
    }
    greet() {
        return `Hello, ${this.firstname}!`;
    }
}
const person3 = new Person("Ulugbek", "Uzbek", 26);
console.log(person3.greet());
class Engineer extends Person {
    constructor(firstname, nationality, age1) {
        super(firstname, nationality, age1);
        this.technologies = [];
    }
}
const engineer = new Engineer("Ulugbek", "Uzbek", 26);
engineer.technologies = ["Javascript", "Typescript"];
console.log(engineer);
//Generics
function identity(arg) {
    return arg;
}
console.log(identity(5));
console.log(identity("hello"));
console.log(identity([1, 2, 3]));
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
const laptop = {
    id: 1,
    title: "Laptop",
    price: 1000,
    warranty: "2 years",
};
const phone = {
    id: 2,
    title: "Smartphone",
    price: 500,
    warranty: "1 year",
};
// Create a shopping cart for Electronic products
const cart = new ShoppingCart();
// Add items to the cart
cart.addItem(laptop);
cart.addItem(phone);
// Calculate the total price
console.log(cart.calculateTotal()); // Output: 1500
// ======================= Typescript with Sammi.ac ============================
function logger(a) {
    if (typeof a === "number") {
        console.log(a.toFixed());
    }
    else if (typeof a === "string") {
        console.log(a.toLocaleLowerCase());
    }
}
const numberv = [1, 2, 3, 4, 5];
numberv.map((num) => console.log(num.toFixed()));
//year - required
//year - unrequired - ?
const logCar = (car) => {
    return `Name of the car - ${car.carName}, created with - ${car.year}!`;
};
console.log(logCar({ carName: "Supra", year: "love" }));
