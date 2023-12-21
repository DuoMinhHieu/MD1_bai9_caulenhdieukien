function feetToMeter(feet) {
    let meter = 0.305 * feet;
    return meter;
}
function meterToFeet(meter) {
    let feet = 3.2808 * meter;
    return feet;
}
let feet = prompt("Nhập feet: ");
document.write(feet + " feet " + "= " + feetToMeter(feet) + " meter");
document.write ("<br>")
let meter = prompt("Nhập meter: ");
document.write(meter + " meter " + "= " + meterToFoot(meter) + " feet");