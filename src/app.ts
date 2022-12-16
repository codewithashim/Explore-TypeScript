// const myName = "Hello World";
// const myAge = 30;
// console.log(myName, myAge, nameTS);

// let Name: string;
// Name = "John Doe";
// //Name = 30; // Error: Type '30' is not assignable to type 'string'.

// console.log(Name);

// union types

// let myName: string | number;

// let age: string | number;
// age = 30;
// age = "30";

// let mixed: (string | number)[] = [];
// mixed.push("Hello");
// mixed.push(30); // Error: Argument of type 'number' is not assignable to parameter of type 'string | number'.
// console.log(mixed);

// let uid: string | number;
// uid = "123";
// uid = 123;
// uid = true; // Error: Type 'true' is not assignable to type 'string | number'.

// const myName: "Ashim" = "Ashim";

// myName = "John"; // Error: Cannot assign to 'myName' because it is a constant.

// let firend: "Ashim" | "John" = "Ashim";

// firend = "Ashim"; // Error: Type '"Ashim"' is not assignable to type '"John" | "Doe"'.
// firend = "Ashim";
// firend = "John";
// firend = "Doe"; // Error: Type '"Doe"' is not assignable to type '"John" | "Doe"'.
