"use strict";
class HinhChuNhat {
    constructor(chieuDai, chieuRong) {
        this._chieuDai = chieuDai;
        this._chieuRong = chieuRong;
    }
    get chieuDai() {
        return this._chieuDai;
    }
    set chieuDai(chieuDaiMoi) {
        this._chieuDai = chieuDaiMoi;
    }
    get chieuRong() {
        return this._chieuRong;
    }
    set chieuRong(chieuRongMoi) {
        this._chieuRong = chieuRongMoi;
    }
    tinhDienTich() {
        return this._chieuDai * this._chieuRong;
    }
    tinhChuVi() {
        return 2 * (this._chieuDai + this._chieuRong);
    }
}
let hinhChuNhat = new HinhChuNhat(5, 3);
console.log("Chiều dài của hình chữ nhật:", hinhChuNhat.chieuDai);
console.log("Chiều rộng của hình chữ nhật:", hinhChuNhat.chieuRong);
console.log("Chu vi của hình chữ nhật:", hinhChuNhat.tinhChuVi());
console.log("Diện tích của hình chữ nhật:", hinhChuNhat.tinhDienTich());
hinhChuNhat.chieuDai = 7;
hinhChuNhat.chieuRong = 4;
console.log("\nSau khi cập nhật kích cỡ:");
console.log("Chiều dài của hình chữ nhật:", hinhChuNhat.chieuDai);
console.log("Chiều rộng của hình chữ nhật:", hinhChuNhat.chieuRong);
console.log("Chu vi của hình chữ nhật:", hinhChuNhat.tinhChuVi());
console.log("Diện tích của hình chữ nhật:", hinhChuNhat.tinhDienTich());
