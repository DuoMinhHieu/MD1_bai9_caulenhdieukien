let so1 = prompt("Nhập số nguyên thứ nhất: ");
let so2 = prompt("Nhập số nguyên thứ hai: ");
let so3 = prompt("Nhập số nguyên thứ ba: ");

so1 = parseInt(so1);
so2 = parseInt(so2);
so3 = parseInt(so3);


let giaTriLonNhat = Math.max(so1, so2, so3);
console.log("Giá trị lớn nhất là: " + giaTriLonNhat);