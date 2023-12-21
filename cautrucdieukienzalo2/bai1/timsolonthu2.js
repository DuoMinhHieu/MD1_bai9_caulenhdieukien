let so1 = parseFloat(prompt("Nhập số thứ nhất:"));
let so2 = parseFloat(prompt("Nhập số thứ hai:"));
let so3 = parseFloat(prompt("Nhập số thứ ba:"));
let so4 = parseFloat(prompt("Nhập số thứ tư:"));
let soLonNhat = Math.max(so1, so2, so3, so4);
let soLonThuHai;

if (so1 === soLonNhat) {
    soLonThuHai = Math.max(so2, Math.max(so3, so4));
} else if (so2 === soLonNhat) {
    soLonThuHai = Math.max(so1, Math.max(so3, so4));
} else if (so3 === soLonNhat) {
    soLonThuHai = Math.max(so1, Math.max(so2, so4));
} else {
    soLonThuHai = Math.max(so1, Math.max(so2, so3));
}

console.log("Số lớn thứ 2 là: " + soLonThuHai);