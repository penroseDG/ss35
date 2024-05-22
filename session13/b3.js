"use strict";
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); //50
//  Abstract class là một lớp mà không thể tạo ra đối tượng từ nó. 
// Nó thường chứa một hoặc nhiều phương thức trừu tượng (abstract methods), 
// cần phải được triển khai (implement) trong các lớp con.
// Sử dụng abstract class khi bạn muốn cung cấp một bộ các phương thức hoặc thuộc tính chung cho các lớp con, 
// nhưng không muốn tạo ra đối tượng trực tiếp từ lớp đó.
// class Person {
//     constructor(private name: string, private age: number) {}
//     displayInfo(): void {
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }
// let person = new Person("John", 30);
// person.displayInfo(); 
// Class là một mô hình mà bạn có thể tạo ra các đối tượng từ nó.
// Trong class, các phương thức và thuộc tính được định nghĩa và triển khai (implement) một cách cụ thể.
