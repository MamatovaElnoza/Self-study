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

//year - required
//year - unrequired - ?
const logCar = (car: { carName: string; year?: string }): string => {
  return `Name of the car - ${car.carName}, created with - ${car.year}!`;
};
console.log(logCar({ carName: "Supra", year: "love" }));

//Car Task
interface SCar {
  name: string;
  color: string;
  isBallon: boolean;
  speed: SCarSpeed;
  price: SCarPrice;
}
interface SCarSpeed {
  max: number;
  min: number;
}
interface SCarPrice {
  total: string;
  credit: string;
  discount: number;
}

//Literal Type
let bmw: "bmw" = "bmw";
type actionType = "show" | "hide";
function loggertype(action: actionType): 1 | -1 {
  switch (action) {
    case "hide":
      return 1;
    case "show":
      return -1;
  }
}
console.log(loggertype);

//ENUM
enum Dictionary {
  Eng,
  Uzb,
  Rus,
}
const uzbIndex = Dictionary.Uzb;
const uzb = Dictionary[uzbIndex];
console.log(uzbIndex);
console.log(uzb);

const runEnum = (): number => {
  return 2;
};
enum Decision {
  Yes = 1,
  No = runEnum(),
}

enum Raqamlar {
  One,
  Two,
  Three,
  Four,
}
function getRaqamlar(raqam: Raqamlar) {
  switch (raqam) {
    case Raqamlar.One:
      return "Bir";
    case Raqamlar.Two:
      return "Ikki";
    case Raqamlar.Three:
      return "Uch";
    case Raqamlar.Four:
      return "To'rt";
    default:
      const a: never = raqam;
  }
}
console.log(getRaqamlar(Raqamlar.Two));

//Tuples = Array
const array: [number, number, string] = [1, 2, "a"];
const ad = array.push(4);
console.log(array[1]);
console.log(ad);
const [a, ...rest] = array;

//Generics
interface ICar {
  name: string;
  color: string;
  onSpeed: <T, G, I>(data: T) => G;
}
function loggerTime<T>(data: T): T {
  if (typeof data === "string") {
    data.toLowerCase();
  } else if (typeof data === "number") {
    data.toFixed();
  }
  return data;
}
const car = {
  name: "bmw",
  color: "red",
};

//Generics with Class
class Car<T> {
  data: T;
}
const ab = new Car<number>();
console.log(ab.data);

//Generics with Function
interface IBus {
  busName: string;
}
function busLogger<T extends IBus>(dat: T): string {
  return dat.busName;
}
