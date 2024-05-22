abstract class Quadrangle {
    protected width: number;
    protected height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    abstract calculatePerimeter(): number;
}
class Rectangle1 extends Quadrangle {
    constructor(width: number, height: number) {
        super(width, height);
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }
    calculatePerimeter(): number {
        return 4 * this.width;
    }
}
let rectangle1 = new Rectangle1(5, 10);
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter());
let square = new Square(5);
console.log("Chu vi hình vuông:", square.calculatePerimeter());
