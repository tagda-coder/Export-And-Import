export function Multiply(num1, num2){
    return num1 * num2;
}

export function Add(a,b){
    return a + b;
}

export default function subtract(number1, number2){
    return number1 - number2;
}

// export default : It means you are exporting this by default and 1 uitility file will contain only one default export okay.



/* 
this is also a way to export anything.
export{
    Multiply as Mul,
    Add
}
*/