class TestClass {
	constructor(num) {
		this.num = num;
	}

	inc() {
		this.num += 1;
	}

	show() {
		console.log(this.num);
	}
}

var t = new TestClass(5);
t.show();
t.inc();
t.show();
