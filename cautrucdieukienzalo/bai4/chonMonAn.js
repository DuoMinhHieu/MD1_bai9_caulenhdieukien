let loaiMonAn = prompt("Chọn loại món ăn (chay, thịt, hải sản):").toLowerCase();
if (loaiMonAn === "chay") {
    console.log("Gợi ý món ăn chay: Cơm chay.");
}
else if (loaiMonAn === "thịt") {
    console.log("Gợi ý món ăn thịt: Bún bò Huế.");
}
else if (loaiMonAn === "hải sản") {
    console.log("Gợi ý món ăn hải sản: Chả Mực Hạ Long.");
}
else {
    console.log("Không nhận diện loại món ăn. Vui lòng chọn chay, thịt hoặc hải sản.");
}