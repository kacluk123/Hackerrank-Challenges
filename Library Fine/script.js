function libraryFine(d1, m1, y1, d2, m2, y2) {
    const returnDate = {
        day : d1,
        month : m1,
        year : y1,
    }
    const shouldReturnDate = {
        day : d2,
        month : m2,
        year : y2,
    }

    let fines = 0

    if(returnDate.day > shouldReturnDate.day
        && returnDate.month === shouldReturnDate.month
        && returnDate.year === shouldReturnDate.year){
        fines = (returnDate.day - shouldReturnDate.day) * 15;
        }
        else if(returnDate.day <= shouldReturnDate.day
        && returnDate.month <= shouldReturnDate.month
        && returnDate.year <= shouldReturnDate.year){
        fines +=  0
    }   else if(returnDate.month > shouldReturnDate.month
        && returnDate.year === shouldReturnDate.year){
        fines = (returnDate.month - shouldReturnDate.month) * 500
    }   else if(returnDate.year > shouldReturnDate.year) {
        fines = 10000;
    }
    return fines;
}

console.log(libraryFine(2, 7, 1014, 1, 1, 1015))