"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name:", this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}
let student1 = new Student("Yasuo", 21);
student1.displayInfo();
