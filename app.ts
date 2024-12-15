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
