import { Multiply } from "./utility.js";
import { Add } from "./utility.js";
//Insted of writing these two lines for two function import you can import all the things of utility file 
// with single line of code. 
import * as myFunction from "./utility.js"; //this one line of code will import all the things of utility file.
import subtract from "./utility.js"; // you can see there is no any curly {} braces. by default export.

const subtraction = subtract(12, 3);
alert(subtraction)

const result = Multiply(5,3)
console.log(result);

let addition = myFunction.Add(25, 30);
alert(addition)

let Multiplication = myFunction.Multiply(12, 4)
alert(Multiplication)


