"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get length() {
        return this._length;
    }
    set length(newLength) {
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
