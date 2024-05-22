"use strict";
// // /*
// // 1.union : kiểu kết hợp 
// // 2.intersection : 
// // */ 
// // let a:number| string | undefined = 5 ;
// // a = "hồng";
// // // tham chiếu (array);
// // let numbers1 : (number|string)[]=[1,2,4,5,6,]
// // let b :number = 6 ; 
// // // 
// // type A ={
// //     name : string,
// //     address: string , 
// //     phone : string , 
// // }
// // type B= {
// //     eamil : string ,
// // }
// // type C = A&B; 
// // let obj : A 
// class person1 {
//        name : string ;
// }
// const person : new person1();
// person.name = "jane";
// console.log("person",person1); 
var vall;
(function (vall) {
    vall[vall["No"] = 0] = "No";
    vall[vall["Ea"] = 1] = "Ea";
    vall[vall["So"] = 2] = "So";
    vall[vall["We"] = 3] = "We";
})(vall || (vall = {}));
let curen = vall.No;
console.log("log1", curen);
curen: 2;
console.log("log2", curen);
curen: 5;
console.log("log3", curen);
curen: "Ea";
console.log("log4", curen);
