class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];
    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}
let department = new Department(101, " Ổ Quỷ ", [" wỷ1 ", "wỷ2"]);
department.describe();
