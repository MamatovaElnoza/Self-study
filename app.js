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
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// console.log(add('Ulugbek', 25)); // X Error
//Return Type
function greeting(firstname) {
    return `Hello, ${firstname}!`;
}
console.log(greeting("Elnoza"));
