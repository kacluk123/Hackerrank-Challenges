function bonAppetit(bill, k, b) {
    let cost = bill.reduce((a,b)=> a + b , 0)
    const total = (cost - bill[k]) / 2;

    return b === total ? "Bon Appetit" : b - total;
}

console.log(bonAppetit([21, 2, 89, 94, 33, 45, 86, 22, 24, 60], 8, 226))