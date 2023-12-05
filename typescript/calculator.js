// Function to add two numbers
function add(a, b) {
    return a + b;
}
// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}
// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}
// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        throw new Error("Cannot divide by zero");
    }
}
// Example usage
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat(add(num1, num2)));
console.log("Subtraction: ".concat(subtract(num1, num2)));
console.log("Multiplication: ".concat(multiply(num1, num2)));
try {
    console.log("Division: ".concat(divide(num1, num2)));
}
catch (error) {
    console.error(error.message);
}
