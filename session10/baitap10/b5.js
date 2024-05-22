"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
let department = new Department(101, " Ổ Quỷ ", [" wỷ1 ", "wỷ2"]);
department.describe();
