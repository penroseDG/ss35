class Product {
    public id : number ;
    public name : string ; 
    public price : string ;
    constructor(id:number ,name:string, price : string){
        this.id = id ;
        this.name = name ;
        this.price = price;
    }

}
class CartProduct extends Product {
    quantity : number ; 
    constructor(id : number,name : string , price : string , quantity: number ){
        super(id ,name ,price );
       this.quantity = quantity;
    }
}