"use strict";
let bienAny = "bibi";
let bienUnknown = "bubu";
// Sử dụng biến kiểu any
let doDaiAny = bienAny.length; // không có lỗi, vì biến kiểu any có thể là bất kỳ kiểu nào
console.log("Độ dài của biến kiểu any:", doDaiAny); // in ra: 9
// Sử dụng biến kiểu unknown 
let doDaiUnknown = bienUnknown.length; // lỗi: Property 'length' does not exist on type 'unknown'
console.log("Độ dài của biến kiểu unknown:", doDaiUnknown);
