"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
}
