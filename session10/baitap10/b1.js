"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vehicle1 = new Vehicle(" con bò ăn xăng ", 2010, "Ferrari");
let vehicle2 = new Vehicle("xe đạp cút kít", 2022, "Vinfast");
console.log("Thông tin của vehicle1:");
console.log("Tên:", vehicle1.name);
console.log("Năm sản xuất:", vehicle1.year);
console.log("Hãng xe:", vehicle1.company);
console.log();
console.log("Thông tin của vehicle2:");
console.log("Tên:", vehicle2.name);
console.log("Năm sản xuất:", vehicle2.year);
console.log("Hãng xe:", vehicle2.company);
