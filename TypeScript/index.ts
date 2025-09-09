//Basic Types in TypeScript


//string
let username : string = "kalana" //type depinition (string)
console.log(username);


//number
let age:number = 18
console.log(age);


//boolean
let isAdmin : boolean = true
console.log(isAdmin);


//parana js wge ona type ekk use karanna puluwn
let anything : any = ""
anything = 2025


//tuple
let user:[string, number] = ["hi..", 23]
console.log(user);


//array
let numbers : number[] = [1,2,3,4,5] //numbers set ekk vitarai mekt danna puluwn
console.log(numbers);
let names : string[] = ["kalana", "nuwan", "kavindu"] //names set ekk vitarai mekt danna puluwn
console.log(names);


//enum
enum Color {
    RED,
    GREEN,
    BLUE
  }

  let book_color: Color = Color.GREEN;
  console.log(book_color); // Output: 1


//object
  interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
  }

  let person_details: Person = {
    name: "kalana",
    age: 18
  };

  let person_details2: Person = {
    name: "nuwan",
    age: 20,
    email: "kalana@gmail.com" // Optional property used
  };

  console.log(person_details);
  console.log(person_details2);

//type alias (interface wenuwat type alias ekk hadanna puluwn)
  type Student = {
    name: string;
    age: number;
    grade: string;
  };

  let student_details: Student = {
    name: "nuwan",
    age: 20,
    grade: "A"
  };

  console.log(student_details);


//union types
  let value: string | number; //value eka string ekk number ekk danna puluwn habai wena dewal danna baa
  value = "hello";
  value = 5;
  // value = true; // Error: Type 'boolean' is not assignable to type 'string | number'
  console.log(value);


//function
  function add(x: number, y: number):number {
    return x + y;
  }

  console.log(add(5, 10)); // Output: 15

  function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }

  greet("kalana"); // Output: Hello, kalana!


  const test = (a: string, b?: number): boolean => {
    return true;
  }

  test("kalana");
  test("kalana", 5);