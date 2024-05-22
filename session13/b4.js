"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log(`Tên sản phẩm: ${this.name}, ID: ${this.id}`);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}
let electronicProduct = new Electronic("điện thoại", 2, "Samsung");
electronicProduct.printInfo();
let bookProduct = new Book("Harry Potter", 1, "J.K. Rowling");
bookProduct.printInfo();
