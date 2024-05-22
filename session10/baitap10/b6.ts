class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    get length(): number {
        return this._length;
    }
    set length(newLength: number) {
        this._length = newLength;
    }
}
let song = new Song(1, "Baihatnotop1TG", 1000);
console.log(song.name); // In ra "Shape of You"
console.log(song.length); 
song.name = "Baihattopnno2TG";
song.length = 1001;
console.log(song.name); // In ra "Perfect"
console.log(song.length);
