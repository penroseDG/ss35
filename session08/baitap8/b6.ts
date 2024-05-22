function xuLyDuLieu(input: string | string[]) {
    if (typeof input === 'string') {
        console.log(input); 
    } else if (Array.isArray(input)) {
        input.forEach(item => console.log(item)); 
    } else {
        throw new Error("Đầu vào không hợp lệ"); 
    }
}
xuLyDuLieu("đánh vần");
xuLyDuLieu(["F","E","D","C","B","A","S"]); 
