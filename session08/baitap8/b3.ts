type HinhVuong = {
    loai: 'vuong';
    doDaiCanh: number;
};
type HinhTron = {
    loai: 'tron';
    banKinh: number;
};
type HinhHoc = HinhVuong | HinhTron;
function laHinhVuong(hinh: HinhHoc): hinh is HinhVuong {
    return (hinh as HinhVuong).loai === 'vuong';
}
function tinhDienTich(hinh: HinhHoc): number {
    if (laHinhVuong(hinh)) {
        return hinh.doDaiCanh ** 2;
    } else {
        return Math.PI * hinh.banKinh ** 2; 
        }
}
let hinhVuong: HinhVuong = { loai: 'vuong', doDaiCanh: 5 };
console.log("Diện tích hình vuông:", tinhDienTich(hinhVuong)); // Diện tích hình vuông: 25
let hinhTron: HinhTron = { loai: 'tron', banKinh: 3 };
console.log("Diện tích hình tròn:", tinhDienTich(hinhTron)); // Diện tích hình tròn: ~28.27
