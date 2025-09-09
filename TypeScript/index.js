"use strict";
//Basic Types in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//string
let username = "kalana"; //type depinition (string)
console.log(username);
//number
let age = 18;
console.log(age);
//boolean
let isAdmin = true;
console.log(isAdmin);
//parana js wge ona type ekk use karanna puluwn
let anything = "";
anything = 2025;
//tuple
let user = ["hi..", 23];
console.log(user);
//array
let numbers = [1, 2, 3, 4, 5]; //numbers set ekk vitarai mekt danna puluwn
console.log(numbers);
let names = ["kalana", "nuwan", "kavindu"]; //names set ekk vitarai mekt danna puluwn
console.log(names);
//enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let book_color = Color.GREEN;
console.log(book_color); // Output: 1
let person_details = {
    name: "kalana",
    age: 18
};
let person_details2 = {
    name: "nuwan",
    age: 20,
    email: "kalana@gmail.com" // Optional property used
};
console.log(person_details);
console.log(person_details2);
let student_details = {
    name: "nuwan",
    age: 20,
    grade: "A"
};
console.log(student_details);
//union types
let value; //value eka string ekk number ekk danna puluwn habai wena dewal danna baa
value = "hello";
value = 5;
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'
console.log(value);
//function
function add(x, y) {
    return x + y;
}
console.log(add(5, 10)); // Output: 15
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("kalana"); // Output: Hello, kalana!
const test = (a, b) => {
    return true;
};
test("kalana");
test("kalana", 5);
//# sourceMappingURL=index.js.map