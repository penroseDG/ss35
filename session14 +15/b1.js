"use strict";
class Student11 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    // phương thức thêm khóa học cho sinh viên đăng kí
    enroll(course) {
        this.enrolledCourses.push(course);
        // for(let i=0; i< this.enrolledCourses.length; i++){
        console.log(`${this.name} Đã đăng kí khóa học : ${course.title}`);
        // }
    }
}
// tạo class bài tập cho bài học
class Asignment {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}
// tạo class bài học cho khóa học
class Lessons {
    constructor(id, title, asignment) {
        this.id = id;
        this.title = title;
        this.asignment = [];
    }
}
// tạo class hướng dẫn
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // tạo khóa học
    createCourse(id, title, instructor, lessons, assesment) {
        return new Course(1, "M 24", "mai", [this.createLesson(1, "lap trinh", [this.createAsignment(1, "bt1", "tinh tong")])], []);
    }
    // tạo danh sách bài học
    createLesson(id, title, asignment) {
        asignment.push(this.createAsignment(2, "bt1", "tinh tong")); //
        console.log("222222222222", asignment);
        return { id: id, title: title, asignment: asignment };
    }
    // tạo danh sách bài tập
    createAsignment(id, name, content) {
        return new Asignment(id, name, content);
    }
    // tạo danh sách bài kiểm tra
    createAssesment(id, name, content) {
        return new Assesment(2, "Bài kht1", "thi lần 1");
    }
}
let result = new Instructor(1, "mao").createLesson(1, "bai hoc 1", []);
console.log("1111", result);
// tạo class khóa học cho sinh viên đăng kí học
class Course {
    constructor(id, title, instructor, lessons, assesment) {
        this.id = id;
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assesment = [];
    }
}
// tạo class bài kiểm tra cho khóa học
class Assesment {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}
