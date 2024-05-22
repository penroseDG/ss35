/*   
 OOP : lập trình hướng đối tượng
 Object oriented programs 
 là mô hình lập trình dựa vào các đối tượngt thực tế 
 đối tượng con mèo , đối tượng cái xe ô tô , cái bàn , cái máy tính , ... 
 1 đối tượng sẽ bao gồm thuộc tính và phương thức 
 ví dụ đối tượng con mèo 
 thuộx tính : màu lông , màu mắt , nặng , ... 
 phương thức : bắt chuột , chạy , nhảy , ...
 ví dụ về đối tượng cái xe ô tô 
 thuộc tính : 
 phương thức : 

 cách tạo đối tượng 
 1. dùng let ,var 
  let student ={


  }
2. dùng new Object()
3. dùng hàm tạo constructor ==> dùng từ khóa new 
4. dùng biến class 

*/ 
// yêu cầu tạo 1 đối tượng student 
   class Student {
    // khai báo các thuộc tính 
    name : string 
    age : number
    constructor ( name : string , age : number ){
        this.name = name ;
        this.age= age ;
    } 
    // khai báo cá phương thức 
    // ví dụ thầy cô phương thức get Name 
    getName() : void {
        console.log(`belulu${this.name}`);
    }
    getAge():void {
        console.log("");
    }
   }
// tạo đối tượng dùng từ khóa new 
 let std1 = new Student("minh thu",15);
 console.log("1111",std1);
 // lấy thuộc tính : 
 // đối tượng . thuộc tính 
 console.log(" đối tượng std1 có thuộc tính name giá trị là " ,std1.name);
// gọi phương thức 
// đối tượng . phương thức 
console.log("gọi phương thức getName",std1.getName());
/*
      Các tính chất của lập trình đối tượng 
      4. tính chất 
      - đóng gói : encapsulation 
      - kế thừa : inheritance 
      - đa hình : polymorphysm 
      - tính trừu tượng : abstraction 
*/
