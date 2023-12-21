let tuoi = parseInt(prompt("Nhập tuổi của bạn:"));
let treEm = 0;
let thieuNien = 13;
let nguoiTruongThanh = 18;
let nguoiCaoTuoi = 60;
if (tuoi < treEm) {
    console.log("Bạn là trẻ em.");
} else if (tuoi < thieuNien) {
    console.log("Bạn là thiếu niên.");
} else if (tuoi < nguoiTruongThanh) {
    console.log("Bạn là người trưởng thành.");
} else if (tuoi < nguoiCaoTuoi) {
    console.log("Bạn là người cao tuổi.");
} else {
    console.log("Bạn là người già.");
}