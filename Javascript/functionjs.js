// Hire order function 
function wrapper() {
    return "Welcome to GFG";
}

function greetMessage(wrapper, name) {
    console.log(`${name}, ${wrapper()}`);
}

greetMessage(wrapper, "Prakash"); // Output: Prakash, Welcome to GFG

// Return function 
function displayMessage() {
    return function() {
        console.log("Hello from the inner function");
    };
}

const output = displayMessage();
output(); // Output: Hello from the inner function

// Combining Both 
function calculatePower(power) {
    return function(number) {
        return Math.pow(number, power);
    };
}

const square = calculatePower(2);
const cube = calculatePower(3);

console.log(square(4)); // Output: 16
console.log(cube(3)); // Output: 27

// Functions in arrays 
function calculatePower(wrapper, arr) {
    const tempArr = [];
    for (let number of arr) {
        tempArr.push(wrapper(number));
    }
    return tempArr;
}

function square(number) {
    return number ** 2;
}

function cube(number) {
    return number ** 3;
}

const arr = [1, 2, 3, 4, 5];

const squaredNumbers = calculatePower(square, arr);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const cubedNumbers = calculatePower(cube, arr);
console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]