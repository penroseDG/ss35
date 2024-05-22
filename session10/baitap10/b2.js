"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let Students = [];
Students.push(new Student(1, 20, "ducpro123@gmail.com"));
Students.push(new Student(2, 22, "ducvcl@gmail.com"));
Students.push(new Student(3, 21, "ducvip1612@gmail.com"));
console.log("Thông tin của các sinh viên:");
Students.forEach(student => {
    console.log("ID:", student.id);
    console.log("Tuổi:", student.age);
    console.log("Email:", student.email);
    console.log();
});
