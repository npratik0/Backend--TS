let message: string = "hello";
console.log(message);
// message = 0 // Error

// Primitive types
let booleanVar: boolean = true;
let numberVar: number = 42;
let symbolVar: symbol = Symbol("unique");
let nullVar: null = null;
let undefinedVar: undefined = undefined;

let anyVar: any = "Could be anything";
anyVar = anyVar + 100; // No error

let unknownVar: unknown = "Couuld be anything too";
// unknownVar = unKnownVar + 100 // Error
// unknown is type assertion

let scores: number[] = [90,80,70];
console.log(scores)
// tuples
let tupleVar: [string, number] = ["Alice", 30];
console.log(tupleVar)
// tupleVar = [30, "Alice"] // Error

// Union
let id: String | number;
id = "Hello";
console.log(id)
id = 123;
console.log(id);
// id = true // err

// functions
function add(num1: number, num2: number): string{
    let sum: number =  num1 + num2;
    return `Sum is ${sum}`;
}
let result: string = add(10,20);
console.log(result);

const greet = (name: string = "Guest"): void =>{
    console.log(`Hello, ${name}`);
}
greet(); // name is optional if default value

// Object Defination
// 1. Object Literal
let person: {name: string; age: number} = {
    name: "Bob",
    age: 25,
    // isActive: true // error
};
console.log(person,person.name);

// 2. Interface
interface Product{
    id: number;
    name: string;
    price: number;
    description?: string // optional
}

const laptop: Product = {
    id : 1,
    name: "Laptop",
    price: 1500
};
console.log(laptop);

type Student = {
    id: number;
    name: string;
    grade: string;
    product?: Product 
}
let student1: Student = {
    id : 101,
    name : "Charlie",
    grade: "A",
    product: laptop
};
console.log(student1);

// Generics
function identify<T>(arg: T) : T {
    return arg;
}
// Data type injected at call time
let output1: string = identify<string>("myString");
console.log(output1);
let output2: number = identify<number>(100);
console.log(output2);

// enum
// named constant
enum Role{
    Admin, // Admin = 0
    User,
    Guest
}
let userRole: Role = Role.Admin;
console.log(userRole); //0
console.log(userRole == Role.Admin) // constant check

let userRoleName: string = "admin";
console.log(userRoleName == "Admin") // case sensitive check

// Generic Usercase
interface User {
    id: number;
    name: string;
    role: Role;
}
let optUser: Partial<User> = {
    name: "Dave"
};
// every attribute is optional
console.log(optUser);
let readonlyUser: Readonly<User> = {
    id : 1,
    name : "Eve",
    role: Role.User
};
// readonlyUser.id = 2; // Error
console.log(readonlyUser);

// Task
enum carType{
    Sedan,
    SUV,
    Truck,
    Coupe
}
type caeModel = {
    name: string,
    description: string
}

interface Car {
    make : string | number;
    year: number;
    type: carType;
    isElectric?: boolean | number | string
}




