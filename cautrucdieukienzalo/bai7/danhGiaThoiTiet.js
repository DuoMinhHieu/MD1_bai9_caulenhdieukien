let nhietDoHienTai = parseFloat(prompt("Nhập nhiệt độ hiện tại (độ C):"));
if (nhietDoHienTai < 0) {
    console.log("Thời tiết lạnh giá.");
} else if (nhietDoHienTai >= 0 && nhietDoHienTai < 15) {
    console.log("Thời tiết lạnh.");
} else if (nhietDoHienTai >= 15 && nhietDoHienTai < 25) {
    console.log("Thời tiết mát mẻ.");
} else if (nhietDoHienTai >= 25 && nhietDoHienTai < 35) {
    console.log("Thời tiết ấm áp.");
} else {
    console.log("Thời tiết nóng.");
}