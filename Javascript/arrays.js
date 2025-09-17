arr = new Array(1, 2, 3, 6, 5, 4);
for (let i = 0; i < 6; i++) {
	arr[i] *= 3;
}
console.log(arr);


// map
function triple(n) {
	return n * 3;
}
arr = new Array(1, 2, 3, 6, 5, 4);

var new_arr = arr.map(triple);
console.log(new_arr);

// reduce
arr = new Array(1, 2, 3, 6, 5, 4);
result = 1;
for (let i = 0; i < 6; i++) {
	result = result * arr[i];
}
console.log(result);

function product(a, b) {
	return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4);

var product_of_arr = arr.reduce(product);
console.log(product_of_arr);

// filter
arr = new Array(1, 2, 3, 6, 5, 4);
new_arr = [];
for (let i = 0; i < 6; i++) {
	if (arr[i] % 2 == 0) {
		new_arr.push(arr[i]);
	}
}
console.log(new_arr);

// 
arr = new Array(1, 2, 3, 6, 5, 4);
var new_arr = arr.filter(function (x) {
	return x % 2 == 0;
});

console.log(new_arr);

