/*
 cách tạo class 
*/ 
class Students {
// khai báo các thuộc tính
   private name : string ; 
    // mặc định nếu không điền gì vào sẽ là public 
    // bên ngoài class Students có thể truy cập được 
     constructor(name : string){
     this.name = name
    } 
  // nơi khai báo phương thức 
  // có phương thức getName 
  getName(){
         return this.name 
  }
  // có phương thức đi thay đổi tên người đó
  // có tham số nhận vào và không cần return 

  setName(newName : string ){
     this.name= newName
  }
}
// instance nghĩa là đi tạo đối tượng từ class 
let std = new Students("Penrose");
let std1 = new Students(" NewVk");
std1.setName= ("DG");
console.log("222222",std1.getName());
console.log("std",std1);

 /*
  Access modifier : phạm vi truy cập 
  1.public  
  thì bên ngoài có thể truy cập được
  2.private 
  chỉ được truy cập ở bên trong class 
  -thế muốn lấy 
  
  3.protected 
  chỉ được truy cập ở bên trong class và subclass(class - con kế thưa )
 */ 
