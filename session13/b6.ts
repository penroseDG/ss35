abstract class Employee {
    protected name: string;
    protected role: string;
    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }
    abstract calculateSalary(): number;
}
class internEmployee extends Employee {
    constructor(name: string, protected workHour: number) {
        super(name, "Intern");
    }
    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}
class officialEmployee extends Employee {
    constructor(name: string, protected overtimeWage: number) {
        super(name, "Official");
    }
    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}
// Khởi tạo đối tượng từ lớp internEmployee và tính lương
let intern = new internEmployee(" cũng đẹp trai mà siêu cấp vipro  ", 160);
let internSalary = intern.calculateSalary();
console.log(`Lương của ${intern.name} (${intern.role}): ${internSalary}`);
// Khởi tạo đối tượng từ lớp officialEmployee và tính lương
let official = new officialEmployee(" đức đẹp trai ", 5000000);
let officialSalary = official.calculateSalary();
console.log(`Lương của ${official.name} (${official.role}): ${officialSalary}`);
