"use strict";
/*
  1. array
 */
let numbers = [1, 2, 3, 4];
// khai báo rằng numbers các phần tử trong mảng number phải là number
let students = ["duc", "yeu", "em"];
/*
 2.object
*/
let object = {
    name: "penrose DG",
    address: "quê sơn tùng",
    id: 10000000000000000,
};
let obj1 = {
    name: "penrose DG",
    address: "quê sơn tùng",
    id: 
};
/*
 3.enum
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngoc",
    address: "hn",
    role: 5
};
/*
 3.void
 áp dụng với function
 -khi hàm không trả về kết quả gì
 - khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
*/
function sayHello() {
    console.log("hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
/*
 5.kiểu dữ liệu unknow
 - tương tự kiểu dữ liệu any nhưng chặt hơn
 - khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
function test(a) {
    console.log(a.toUpperCase()); // viết hoa từ đó lên 
}
test(5);
function test1(a) {
    // bắt buộc phải kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính 
    console.log("11111", typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text");
/*
 6.type never
 - thường dùng trong các vòng lặp vô tận
 - tức là các vòng lặp chạy không có điểm dừng để đo giá trị ;

*/
function typeNever() {
    let a = 1;
    while (true) {
        console.log("GIÁ TRỊ A", ++a);
    }
}
