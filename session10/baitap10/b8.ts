class HinhChuNhat {
    private _chieuDai: number;
    private _chieuRong: number;
    constructor(chieuDai: number, chieuRong: number) {
        this._chieuDai = chieuDai;
        this._chieuRong = chieuRong;
    }
    get chieuDai(): number {
        return this._chieuDai;
    }
    set chieuDai(chieuDaiMoi: number) {
        this._chieuDai = chieuDaiMoi;
    }
    get chieuRong(): number {
        return this._chieuRong;
    }
    set chieuRong(chieuRongMoi: number) {
        this._chieuRong = chieuRongMoi;
    }
    tinhDienTich(): number {
        return this._chieuDai * this._chieuRong;
    }
    tinhChuVi(): number {
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
