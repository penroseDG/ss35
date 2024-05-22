class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(" Tên nhân viên :", this.name);
        console.log(" Công ty :", this.company);
        console.log(" Điện thoại :", this.phone);
    }
}
let employee = new Employee("PenroseDG", "Vippro-Company", "123454321");
employee.printInfo();
