"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(" Tên nhân viên :", this.name);
        console.log(" Công ty :", this.company);
        console.log(" Điện thoại :", this.phone);
    }
}
let employee = new Employee("PenroseDG", "Vippro-Company", "123454321");
employee.printInfo();
