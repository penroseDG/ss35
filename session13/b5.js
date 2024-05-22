"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle1 extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
let rectangle1 = new Rectangle1(5, 10);
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter());
let square = new Square(5);
console.log("Chu vi hình vuông:", square.calculatePerimeter());
