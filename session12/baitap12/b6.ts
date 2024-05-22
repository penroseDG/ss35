class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    public getDescription(): void {
        console.log(" Tên album", this.name);
        console.log(" Giá tiền:", this.price);
    }
}
class Album extends Product {
    private artist: string;
    private genre: string;
    constructor(name: string, price: number, artist: string, genre: string) {
        super(name, price);
        this.artist = artist;
        this.genre = genre;
    }
    public getAlbumInfo(): void {
        this.getDescription();
        console.log("Tên rapper :", this.artist);
        console.log("Thể loại :", this.genre);
    }
}
let album = new Album("99%", 99, "MCK", "Rap");
album.getAlbumInfo();
//Lớp Product định nghĩa các thuộc tính name và price là protected, cũng như phương thức getDescription để in ra thông tin hiện tại của sản phẩm.

// Lớp Album kế thừa từ Product và bổ sung các thuộc tính artist và genre, cả hai đều được đánh dấu là private.
// Lớp này cũng có phương thức getAlbumInfo để in ra thông tin đầy đủ của album, bao gồm cả thông tin từ lớp cha và thông tin về nghệ sĩ và thể loại âm nhạc của album.