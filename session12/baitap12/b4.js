"use strict";
class Vehicle1 {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
        console.log("Slowdown speed:", this.speed);
    }
    speedUp(amount) {
        this.speed += amount;
        console.log("Upto speed:", this.speed);
    }
    showSpeed() {
        console.log("Current speed:", this.speed);
    }
}
class Bicycle extends Vehicle1 {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle1 = new Bicycle("duc-biker", 20, "Bwm", 40);
// In thông tin về tốc độ hiện tại 
bicycle1.showSpeed();
// Tăng tốc độ lên
bicycle1.speedUp(10);
bicycle1.showSpeed();
// Giảm tốc độ đi 
bicycle1.slowDown(5);
bicycle1.showSpeed();
