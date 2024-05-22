class SingerManager {
    private singerName: string;
    protected singerGenre: string;
    constructor(singerName: string, singerGenre: string) {
        this.singerName = singerName;
        this.singerGenre = singerGenre;
    }
    public displaySingerInfo(): void {
        console.log("Singer Name:", this.singerName);
        console.log("Singer Genre:", this.singerGenre);
    }
}
class PopSinger extends SingerManager {
    private hitSongs: number;
    constructor(singerName: string, singerGenre: string, hitSongs: number) {
        super(singerName, singerGenre);
        this.hitSongs = hitSongs;
    }
    public displayPopSingerInfo(): void {
        this.displaySingerInfo(); 
        console.log("Number of Hit Songs:", this.hitSongs);
    }
}
let popSinger = new PopSinger("Ariana Grande", "Pop", 10);
popSinger.displayPopSingerInfo();
// Lớp SingerManager quản lý thông tin chung của một ca sĩ, bao gồm tên và thể loại âm nhạc.
// Thuộc tính singerName được đánh dấu là private, chỉ có thể truy cập từ bên trong lớp đó.
// Thuộc tính singerGenre được đánh dấu là protected, nghĩa là nó có thể truy cập từ các lớp con nhưng không từ bên ngoài lớp đó.

// Lớp PopSinger kế thừa từ SingerManager và bổ sung thông tin về số bài hát hit.
// Thuộc tính hitSongs được đánh dấu là private, chỉ có thể truy cập từ bên trong lớp đó. 
// Phương thức displayPopSingerInfo của lớp PopSinger có thể gọi phương thức displaySingerInfo của lớp cha bởi vì displaySingerInfo là protected.


