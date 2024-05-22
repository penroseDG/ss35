"use strict";
function tinhBinhPhuong(input) {
    if (typeof input === 'number') {
        return input ** 2;
    }
    else if (Array.isArray(input)) {
        return input.map(x => x ** 2);
    }
    else {
        throw new Error("Đầu vào không hợp lệ");
    }
}
console.log(tinhBinhPhuong(10)); // Trả về 25*4 =10^2
console.log(tinhBinhPhuong([3, 6, 9])); // Trả về [9, 36, 81]
