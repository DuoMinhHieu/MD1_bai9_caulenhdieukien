
let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
a = parseInt(a);
b = parseInt(b);
if (a % b === 0) {
    console.log(a + " chia hết cho " + b);
} else {
    console.log(a + " không chia hết cho " + b);
}