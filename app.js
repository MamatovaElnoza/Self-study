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
//Function Overloading
function add(a, b) {
    return a + b;
}
add("Hello", "Steve");
add(10, 20);
