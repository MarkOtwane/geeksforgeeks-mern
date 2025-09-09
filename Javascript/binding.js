var geeks = {
	name: "ABC",
	printFunc: function () {
		console.log(this.name);
	},
};
geeks.printFunc();
//  bindig the /function to object

var geeks = {
	name: "ABC",
	printFunc: function () {
		console.log(this.name);
	},
};

var printFunc2 = geeks.printFunc;
printFunc2();

// Here we made a new variable function printFunc2 which refers to the function printFunc() of object geeks. Here the binding of this is lost, so no output is produced.
// To make sure that any binding of this is not to be lost, we are using Bind() method.
// By using bind() method we can set the context of this to a particular object. So we can use other variables also to call binded function.
// Use bind() method in the previous example:
var geeks = {
	name: "ABC",
	printFunc: function () {
		console.log(this.name);
	},
};

var printFunc2 = geeks.printFunc.bind(geeks);
//using bind()
// bind() takes the object "geeks" as parameter//
printFunc2();
