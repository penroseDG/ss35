abstract class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise() : void;
    printName() {
        console.log("Tên của đối tượng là:", this.name);
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}
let cat = new Cat(" chó ");
cat.printName(); 
cat.makeNoise(); 
let dog = new Dog(" mèo ");
dog.printName(); 
dog.makeNoise(); 
