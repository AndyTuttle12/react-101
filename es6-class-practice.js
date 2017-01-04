class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		let s = ((this.a+this.b+this.c)/2);
		let area = Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
		return area;
	}
}

var myTri = new Triangle(3,4,5);
console.log(myTri.area);

class EqTriangle extends Triangle {
	constructor(a) {
		super(a,a,a);
		this.a = a;
	}
}

var myEq = new EqTriangle(5);
console.log(myEq.area);

class IsoTriangle extends Triangle {
	constructor(a,b) {
		super(a,b,b);
		this.a = a;
		this.b = b;
	}
}

var myIso = new IsoTriangle(5,7);
console.log(myIso.area);