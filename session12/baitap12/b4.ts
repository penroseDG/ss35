class Vehicle1{
    protected name: string;
    protected speed: number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    public slowDown(amount: number): void {
        this.speed -= amount;
        console.log("Slowdown speed:", this.speed);
    }
    public speedUp(amount: number): void {
        this.speed += amount;
        console.log("Upto speed:", this.speed);
    }
    public showSpeed(): void {
        console.log("Current speed:", this.speed);
    }
}
class Bicycle extends Vehicle1{
    private gear: number;
    constructor(name: string,speed: number, id: string, gear: number) {
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
