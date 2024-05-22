
// Union Types cho phép biến có thể nhận giá trị của nhiều kiểu dữ liệu khác nhau
type UnionTypes = number | string;
let bien: UnionTypes;
bien = 10; // Đúng, bien có thể là số
bien = "abc"; // Đúng, bien cũng có thể là chuỗi

// Intersection Types kết hợp các loại dữ liệu lại với nhau thành một loại dữ liệu mới,
// có tất cả các thuộc tính của các loại dữ liệu gốc.
type Penrose = {
    ten: string;
    tuoi: number;
};
type ThongTinLienHe = {
    email: string;
    number: string;
};
type IntersectionTypes = Penrose & ThongTinLienHe;
let nguoi: IntersectionTypes = {
    ten: "DG",
    tuoi: 30,
    email: "vipro@gmail.com",
    number: "123123123124"
};


