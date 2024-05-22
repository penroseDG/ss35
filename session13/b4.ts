class Product {
    constructor(protected name: string, protected id: number) {}
    printInfo(): void {
        console.log(`Tên sản phẩm: ${this.name}, ID: ${this.id}`);
    }
}
class Electronic extends Product {
    constructor(name: string, id: number, private brand: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Thương hiệu: ${this.brand}`);
    }
}
class Book extends Product {
    constructor(name: string, id: number, private author: string) {
        super(name, id);
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Tác giả: ${this.author}`);
    }
}
let electronicProduct = new Electronic("điện thoại", 2, "Samsung");
electronicProduct.printInfo();
let bookProduct = new Book("Harry Potter", 1, "J.K. Rowling");
bookProduct.printInfo();
