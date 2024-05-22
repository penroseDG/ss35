/*
   Tính kế thừa 
    là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có 
    các thuộc tính và phương thức của lớp cha 
    Giúp tái sử dụng đoạn code 
    1 class con có thể kế thừa được 1 class cha 
    1 class cha có thể cho nhiều class con kế thừa 
*/
// khai báo class cha 
// khai báo class cha
class Parent {
    name:string;
    id:number
    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }
    showInfor(): void{
        console.log(`Xin chào ${this.name}`);
        
    }
    // phương thức thay đổi name 
    setName(newName:string){
        return this.name = newName;
    }
}
// khởi tạo class con jees thừa class cha
// để kế thừa dùng từ khó extends
class Child extends Parent{
    constructor(name:string, id:number , age: number){
        super(name,id)// từ khóa super bắt buộc phải đặt trên đầu, nếu đặt dưới là lỗi
        this.name = name;
        this.id = id;
        this age= age;
    }
    // ghi đè phương thức : override | overwirte 
    showInfo(): string {
        return`${this.name} năm nay ${this.age}tuổi!`
    }
}
//khởi tạo đối tượng con 
let child1 = new Child("Hương", 12);
// khi class Child kế thừa class Parent thì sẽ kế thừa các thuộc tính và phương thức của nó
console.log("111", child1.showInfor());
child1.setName("sơn tùng");
console.log("tên mới ", child1.name);
// gọi phương thức show info 
console.log(22222222)