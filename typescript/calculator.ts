// Function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

// Function to subtract two numbers
function subtract(a: number, b: number): number {
    return a - b;
}

// Function to multiply two numbers
function multiply(a: number, b: number): number {
    return a * b;
}

// Function to divide two numbers
function divide(a: number, b: number): number {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Cannot divide by zero");
    }
}

// Example usage
const num1: number = 10;
const num2: number = 5;

console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);

try {
    console.log(`Division: ${divide(num1, num2)}`);
} catch (error) {
    console.error(error.message);
}
