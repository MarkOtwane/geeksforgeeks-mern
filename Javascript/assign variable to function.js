const greetMessage = function () {
	console.log("Hello, Javascript.");
};
greetMessage();

function wrapperFunction() {
    return "Welcome to GeeksForGeeks!";
}

function greetMessage(wrapper, name) {
    const message = wrapper();
    console.log(`${name}, ${message}`);
}

greetMessage(wrapperFunction, "Prakash"); // Output: Prakash, Welcome to GeeksForGeeks!