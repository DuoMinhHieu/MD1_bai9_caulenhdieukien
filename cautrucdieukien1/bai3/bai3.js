let soNguyen = prompt("Nhập vào một số nguyên: ");
soNguyen = parseInt(soNguyen);
if (soNguyen > 0) {
    console.log("Số " + soNguyen + " là số lớn hơn 0.");
} else if (soNguyen < 0) {
    console.log("Số " + soNguyen + " là số nhỏ hơn 0.");
} else {
    console.log("Số " + soNguyen + " bằng 0.");
}