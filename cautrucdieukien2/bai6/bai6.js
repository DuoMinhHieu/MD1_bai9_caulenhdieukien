function giaiPhuongTrinhBacMot(a, b) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình vô số nghiệm";
        } else {
            return "Phương trình vô nghiệm";
        }
    } else {
        let x = -b / a;
        return "Nghiệm của phương trình là: x = " + x;
    }