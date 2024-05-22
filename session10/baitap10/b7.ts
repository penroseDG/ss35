class HinhTron {
    private _banKinh: number;
    constructor(banKinh: number) {
        this._banKinh = banKinh;
    }
    get banKinh(): number {
        return this._banKinh;
    }
    set banKinh(banKinhMoi: number) {
        this._banKinh = banKinhMoi;
    }
    tinhDienTich(): number {
        return Math.PI * this._banKinh ** 2;
    }
    tinhChuVi(): number {
        return 2 * Math.PI * this._banKinh;
    }
}
let hinhTron = new HinhTron(5);
console.log("Bán kính của hình tròn:", hinhTron.banKinh);
console.log("Chu vi của hình tròn:", hinhTron.tinhChuVi());
console.log("Diện tích của hình tròn:", hinhTron.tinhDienTich());
hinhTron.banKinh = 7;
console.log("\nSau khi cập nhật bán kính:");
console.log("Bán kính của hình tròn:", hinhTron.banKinh);
console.log("Chu vi của hình tròn:", hinhTron.tinhChuVi());
console.log("Diện tích của hình tròn:", hinhTron.tinhDienTich());
