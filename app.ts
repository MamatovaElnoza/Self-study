console.log("Hello World!");

//Arrays
const numbers: number[] = [1, 2, 3];
const anotherNumbers: Array<number> = [1, 2, 3];

//Any
const person: any = { firstname: "Elnoza" };

//Object
const person2: { firstname: string } = { firstname: "Elnoza" };

//Parametres
function add(a: number, b: number) {
  return a + b;
}
console.log(add(2, 3));
// console.log(add('Ulugbek', 25)); // X Error
