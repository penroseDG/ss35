abstract class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract displayInfo(): void;
}
class Student extends Person {
    private id: number;
    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Tên sinh viên: ${this.name}, ID: ${this.id}`);
    }
}
class Teacher extends Person {
    private subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên giáo viên: ${this.name}, Môn học: ${this.subject}`);
    }
}
let student = new Student(" HOÀNG TỬ MÙA ĐÔNG ", 12345);
student.displayInfo();
let teacher = new Teacher(" HỒNG TƯ MÙA ĐOẢNG", "IT");
teacher.displayInfo();

