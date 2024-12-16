console.log("Hello World!");

//Arrays
const numbers: number[] = [1, 2, 3];
const anotherNumbers: Array<number> = [1, 2, 3];

//Any
const person: any = { firstname: "Elnoza" };

//Object
const person2: { firstname: string } = { firstname: "Elnoza" };

//Parametres
function add1(a: number, b: number) {
  return a + b;
}
console.log(add1(2, 3));
// console.log(add('Ulugbek', 25)); // X Error

//Return Type
function greeting(firstname: string): string {
  return `Hello, ${firstname}!`;
}
console.log(greeting("Elnoza"));

//Void
function printGreeting(firstname: string): void {
  console.log(`Hello, ${firstname}!`);
}
printGreeting("Islom");

//Function Overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}
add("Hello", "Steve");
add(10, 20);

//Interface
interface Person {
  name: string;
  age: number;
}
function greet(person: Person) {
  return `Hello, ${person.name}!`;
}

//OOP
class Person {
  public firstname: string;
  protected nationality: string;
  private age1: number;
  constructor(firstname: string, nationality: string, age1: number) {
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
  public technologies: string[] = [];
  constructor(firstname: string, nationality: string, age1: number) {
    super(firstname, nationality, age1);
  }
}
const engineer = new Engineer("Ulugbek", "Uzbek", 26);
engineer.technologies = ["Javascript", "Typescript"];
console.log(engineer);

//Generics
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity(5));
console.log(identity("hello"));
console.log(identity([1, 2, 3]));

//Generics with Function and Class
interface Product {
  readonly id: number;
  title: string;
  price: number;
}
class ShoppingCart<T extends Product> {
  private items: T[] = [];
  addItem(item: T) {
    this.items.push(item);
  }
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

// Define a product type that extends the Product interface
interface Electronic extends Product {
  warranty: string;
}

const laptop: Electronic = {
  id: 1,
  title: "Laptop",
  price: 1000,
  warranty: "2 years",
};

const phone: Electronic = {
  id: 2,
  title: "Smartphone",
  price: 500,
  warranty: "1 year",
};

// Create a shopping cart for Electronic products
const cart = new ShoppingCart<Electronic>();

// Add items to the cart
cart.addItem(laptop);
cart.addItem(phone);

// Calculate the total price
console.log(cart.calculateTotal()); // Output: 1500

// ======================= Typescript with Sammi.ac ============================

function logger(a: number | string): void {
  if (typeof a === "number") {
    console.log(a.toFixed());
  } else if (typeof a === "string") {
    console.log(a.toLocaleLowerCase());
  }
}
const numberv: number[] = [1, 2, 3, 4, 5];

numberv.map((num: number) => console.log(num.toFixed()));
