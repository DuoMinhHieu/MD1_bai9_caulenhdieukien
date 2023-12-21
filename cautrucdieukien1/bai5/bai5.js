let diemBaiKiemTra = parseFloat(prompt("Nhập điểm bài kiểm tra: "));
let diemThiGiuaKy = parseFloat(prompt("Nhập điểm thi giữa kỳ: "));
let diemThiCuoiKy = parseFloat(prompt("Nhập điểm thi cuối kỳ: "));
let diemTrungBinh = (diemBaiKiemTra + diemThiGiuaKy + diemThiCuoiKy) / 3;
if (diemTrungBinh >= 8.0) {
    console.log("Học lực xuất sắc.");
} else if (diemTrungBinh >= 6.5) {
    console.log("Học lực khá.");
} else if (diemTrungBinh >= 5.0) {
    console.log("Học lực trung bình.");
} else {
    console.log("Học lực yếu.");
}