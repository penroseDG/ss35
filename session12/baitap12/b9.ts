class Shape {
     overloading(a:number,b?:number  ): string {
          if(b){
             let Shcn = a *b ;
             return`dien tich hcn la${Shcn}`
          }else {
            let St = Math.PI*a*a 
            return`dien tich htron la ${St}`
          }   
     }
    }
class Rectangle extends Shape {
          private width : number 
          private height : number 
          constructor(width : number , height : number){
            super()
            this.width = width ;
            this.height = height;
          }      
        getWidth(){
            return this.width; 
        }
        getHeight(){
            return this.height;
        }
}
class Circle extends Shape {
    private radius : number 
    constructor (radius : number ){
        super()
        this.radius= radius;
    }
    getRadius(){
        return this.radius ;
    }
}
let rectangle = new Rectangle (16 , 12);
let circle = new Circle (2109);
console.log(rectangle.overloading(rectangle.getWidth(), rectangle.getHeight()));
console.log(circle.overloading(circle.getRadius()));
 // ở ngoài ao ước 
 // ở trong ước out 