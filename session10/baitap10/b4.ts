class Vehicle1{
    public name: string;
    protected readonly year: number;
    private company: string;
    private readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    inthongtin (): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
    }
}
let vehicle = new Vehicle1(" teen troong raats Nhaatj", 2020, "Toyota", 102);
vehicle.inthongtin();

