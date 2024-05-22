"use strict";
function nguoidudk(obj) {
    return (typeof obj === 'object' &&
        'name' in obj && typeof obj.ten === 'string' &&
        'age' in obj && typeof obj.tuoi === 'number' &&
        'address' in obj && typeof obj.diaChi === 'object');
}
let nguoi1 = { name: "penrose", age: 20, address: "HaNoi" };
console.log(nguoidudk(nguoi1)); // Trả về true, kiểu dữ liệu đầy đủ 
// let nguoi2 = { ten: "Alice", tuoi: 25, diaChi: { city: "London" } };
// console.log(nguoidudk(nguoi2)); // false vì dữ liệu cho address sai 
