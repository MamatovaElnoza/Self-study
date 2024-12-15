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
console.log(identity('hello'));
console.log(identity([1, 2, 3]));
