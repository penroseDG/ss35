"use strict";
//Một abstract class là một lớp mà không thể tạo ra các đối tượng cụ thể từ nó.
//Nó có thể chứa các phương thức trừu tượng (abstract methods) cũng như các phương thức có thể được triển khai
// (concrete methods).
//Một lớp con kế thừa từ abstract class phải triển khai (implement) tất cả các phương thức trừu tượng 
//được khai báo trong abstract class hoặc nó cũng phải được đánh dấu là abstract.
//Một interface là một tập hợp các phương thức trừu tượng (abstract methods) và các hằng số (constants).
//Interface không thể triển khai (implement) các phương thức, nó chỉ định ra hành động cần thiết mà một lớp phải thực hiện.
//Một lớp có thể implement nhiều interface.
// Abstract class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    // Implementation of abstract method
    makeSound() {
        console.log("Woof Woof");
    }
}
let dog = new Dog();
dog.makeSound();
dog.eat();
class Circle1 {
    print() {
        console.log("Printing Circle");
    }
    draw() {
        console.log("Drawing Circle");
    }
}
let circle = new Circle1();
circle.print();
circle.draw();
