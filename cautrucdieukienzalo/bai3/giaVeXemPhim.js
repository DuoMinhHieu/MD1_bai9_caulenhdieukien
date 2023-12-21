let doTuoi = parseInt(prompt("Nhập độ tuổi của bạn:"));
let treEm = 12;
let nguoiCaoTuoi = 60;
let giaVeTreEm = 20;
let giaVeNguoiLon = 50;
let giaVeCaoTuoi = 30;
if (doTuoi <= treEm) {
    console.log("Giá vé của bạn là $" + giaVeTreEm);
} else if (doTuoi >= nguoiCaoTuoi) {
    console.log("Giá vé của bạn là $" + giaVeCaoTuoi);
} else {
    console.log("Giá vé của bạn là $" + giaVeNguoiLon);
}