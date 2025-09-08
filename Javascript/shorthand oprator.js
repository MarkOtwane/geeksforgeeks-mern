const counter = {
	count: 0,
	next: function () {
		//Inside the next() function, the this references the counter object.
		return ++this.count;
	},
};
counter.next();

