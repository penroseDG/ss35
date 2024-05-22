"use strict";
function boLoi(message) {
    throw new Error(message);
}
let KQboloi = boLoi("Đã xảy ra lỗi!");
console.log(KQboloi); // Không thể đạt được vì hàm không trả về giá trị hợp lệ
function vongLap() {
    while (true) {
        console.log(" đang chạy .......");
    }
}
vonglap();
