// pure function
function doubleValue(number) {
	return number * 2;
}

const result = doubleValue(5);
console.log(result); // 10

//     Takes Input (Arguments): It should accept parameters and use those inputs to produce a result.
// Returns a Value: It always returns a value.
// No Side Effects: The output of the function should not depend on any external state or variables outside of its scope. This means the function should not modify any external state (like global variables or passed-in objects/arrays).
// Deterministic: Given the same input, a pure function will always return the same output. This predictability is a key aspect of pure functions.

// Impure function
const multiplier = 4;

function doubleValue(number) {
	return number * multiplier;
}

const result1 = doubleValue(5);
console.log(result); // 20

//     It relies on an external variable (multiplier).
// If multiplier changes, the output changes even if the input (number) stays the same.
// It’s no longer predictable since it depends on external state.

// Another xtics of a pure function (Avoid Mutation)
function appendNumbers(arr) {
	arr.push(5, 6);
	return arr;
}

const numbers = [1, 2, 3, 4];
const result4 = appendNumbers(numbers);
console.log(result); // [1, 2, 3, 4, 5, 6]
// This function is impure because it mutates the original array. The arr that is passed into the function is directly modified.
// Make It Pure
function appendNumbers(arr) {
	const newArr = [...arr, 5, 6];
	return newArr;
}

const numbers2 = [1, 2, 3, 4];
const result3 = appendNumbers(numbers);
console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)
