"use strict";
function phanTichDuLieu(dauVao) {
    if (dauVao === "null") {
        return null;
    }
    else if (dauVao === "undefined") {
        return undefined;
    }
    else if (dauVao === "true" || dauVao === "false") {
        return dauVao === "true";
    }
    else if (!isNaN(parseFloat(dauVao))) {
        return parseFloat(dauVao);
    }
    else {
        return dauVao;
    }
}
console.log(phanTichDuLieu("123")); // Trả về number
console.log(phanTichDuLieu("true")); // Trả về boolean
console.log(phanTichDuLieu("abc")); // Trả về string
console.log(phanTichDuLieu("null")); // Trả về null
console.log(phanTichDuLieu("undefined")); // Trả về undefined
