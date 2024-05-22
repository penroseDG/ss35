class Employee{
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    public printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    public teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
let quanli1 = new Manager("Penrose", "DGhouse Company", "123-456-7890", 5);
quanli1.printInfo();
console.log("Team size:", quanli1.teamSize);
