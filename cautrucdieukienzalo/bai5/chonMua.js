let thang = parseInt(prompt("Nhập vào số tháng (từ 1 đến 12):"));
if (thang >= 1 && thang <= 12) {
    if (thang >= 3 && thang <= 5) {
        console.log("Mùa Xuân");
    } else if (thang >= 6 && thang <= 8) {
        console.log("Mùa Hạ");
    } else if (thang >= 9 && thang <= 11) {
        console.log("Mùa Thu");
    } else {
        console.log("Mùa Đông");
    }
} else {
    console.log("Tháng không hợp lệ. Vui lòng nhập từ 1 đến 12.");
}