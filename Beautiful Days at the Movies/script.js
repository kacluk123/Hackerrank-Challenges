function beautifulDays(i, j, k) {
    let sum = 0
    for (let z = i; z <= j; z++ ){
        let g = z.toString().split('').reverse()

        let numReverse = Number(g.join(''))
        if((z - Number(numReverse))/k % 1 === 0 ){
                sum++
            }

    }
    return sum;
}
console.log(beautifulDays(949488, 1753821, 5005440))