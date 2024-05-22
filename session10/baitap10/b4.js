"use strict";
class Vehicle1 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    inthongtin() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
    }
}
let vehicle = new Vehicle1(" teen troong raats Nhaatj", 2020, "Toyota", 102);
vehicle.inthongtin();
