class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    public displayInfo(): void {
        console.log("Name:", this.name);
    }
}
class Student extends Person {
    private id: string;
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
    public displayInfo(): void {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}
let student1 = new Student("Yasuo", 21);
student1.displayInfo();
