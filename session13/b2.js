"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Tên sinh viên: ${this.name}, ID: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}
let student = new Student(" HOÀNG TỬ MÙA ĐÔNG ", 12345);
student.displayInfo();
let teacher = new Teacher(" HỒNG TƯ MÙA ĐOẢNG", "IT");
teacher.displayInfo();
