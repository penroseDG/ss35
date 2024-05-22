"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
class internEmployee extends Employee {
    constructor(name, workHour) {
        super(name, "Intern");
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
class officialEmployee extends Employee {
    constructor(name, overtimeWage) {
        super(name, "Official");
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
// Khởi tạo đối tượng từ lớp internEmployee và tính lương
let intern = new internEmployee(" cũng đẹp trai mà siêu cấp vipro  ", 160);
let internSalary = intern.calculateSalary();
console.log(`Lương của ${intern.name} (${intern.role}): ${internSalary}`);
// Khởi tạo đối tượng từ lớp officialEmployee và tính lương
let official = new officialEmployee(" đức đẹp trai ", 5000000);
let officialSalary = official.calculateSalary();
console.log(`Lương của ${official.name} (${official.role}): ${officialSalary}`);
