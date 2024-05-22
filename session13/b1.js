"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Tên của đối tượng là:", this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
let cat = new Cat(" chó ");
cat.printName();
cat.makeNoise();
let dog = new Dog(" mèo ");
dog.printName();
dog.makeNoise();
