function boLoi(message: string): never {
    throw new Error(message);
}
let KQboloi: never = boLoi("Đã xảy ra lỗi!");
console.log(KQboloi); // Không thể đạt được vì hàm không trả về giá trị hợp lệ

function vongLap(): never {
    while (true) {
        console.log(" đang chạy .......");
    }
}
vonglap();

