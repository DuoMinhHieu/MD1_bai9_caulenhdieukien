function laTuoiNguoi(soTuoi) {

    if (Number.isInteger(soTuoi)) {
        if (soTuoi > 0 && soTuoi < 120) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}