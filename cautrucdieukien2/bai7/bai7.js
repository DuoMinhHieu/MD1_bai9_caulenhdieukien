function giaiPhuongTrinhBacHai(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "Phương trình vô nghiệm";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return "Phương trình có nghiệm kép: x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
    }
}


// let a, b, c
// a = parseFloat(prompt('Nhap a = '))
// b = parseFloat(prompt('Nhap b = '))
// c = parseFloat(prompt('Nhap c = '))
//
// if(a == 0) {
//     if(b == 0) {
//         if(c == 0) {
//             alert('phương trình vô số nghiệm')
//         } else {
//             alert('phương trình vô nghiệm')
//         }
//     } else {
//         x = -c/b
//         alert('nghiệm của phương trình x = ' + x)
//     }
// } else {
//     dt = b*b - 4*a*c;
//     if(dt < 0) {
//         alert('phương trình vô nghiệm')
//     } else if(dt == 0) {
//         x = -b/(2*a)
//         alert('nghiệm của phương trình x1 = x2 = ' + x)
//     } else {
//         x1 = (-b + Math.sqrt(dt))/(2*a)
//         x2 = (-b - Math.sqrt(dt))/(2*a)
//         alert(`nghiệm x1 = {x1}, x2 = {x2}`)
//     }
// }
