let soTienChiTieu = parseFloat(prompt("Nhập số tiền bạn đã chi tiêu:"));
let nguong1 = 50;
let nguong2 = 500;
let nguong3 = 1000;

let tiLeThap = 0.02;
let tiLeTrungBinh = 0.05;
let tiLeCao = 0.1;
let diemThuong = 0;

if (soTienChiTieu <= nguong1) {
    diemThuong = soTienChiTieu * tiLeThap;
} else if (soTienChiTieu <= nguong2) {
    diemThuong = nguong1 * tiLeThap + (soTienChiTieu - nguong1) * tiLeTrungBinh;
} else if (soTienChiTieu <= nguong3) {
    diemThuong = nguong1 * tiLeThap + (nguong2 - nguong1) * tiLeTrungBinh + (soTienChiTieu - nguong2) * tiLeCao;
} else {
    diemThuong = nguong1 * tiLeThap + (nguong2 - nguong1) * tiLeTrungBinh + (nguong3 - nguong2) * tiLeCao + (soTienChiTieu - nguong3) * tiLeCao;
}
console.log("Số điểm thưởng của bạn là: " + diemThuong);