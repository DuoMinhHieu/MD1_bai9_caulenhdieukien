function soNgayTrongThang(thang, nam) {
    return new Date(nam, thang, 0).getDate();
}
let soThang = parseInt(prompt("Nhập số tháng:"));
if (soThang >= 1 && soThang <= 12) {
    let namHienTai = new Date().getFullYear();
    let soNgay = soNgayTrongThang(soThang, namHienTai);
    console.log("Tháng " + soThang + " có " + soNgay + " ngày.");
} else {
    console.log("Số tháng không hợp lệ. Vui lòng nhập số tháng từ 1 đến 12.");
}