"use strict";
function laHinhVuong(hinh) {
    return hinh.loai === 'vuong';
}
function tinhDienTich(hinh) {
    if (laHinhVuong(hinh)) {
        return hinh.doDaiCanh ** 2;
    }
    else {
        return Math.PI * hinh.banKinh ** 2;
    }
}
let hinhVuong = { loai: 'vuong', doDaiCanh: 5 };
console.log("Diện tích hình vuông:", tinhDienTich(hinhVuong)); // Diện tích hình vuông: 25
let hinhTron = { loai: 'tron', banKinh: 3 };
console.log("Diện tích hình tròn:", tinhDienTich(hinhTron)); // Diện tích hình tròn: ~28.27
