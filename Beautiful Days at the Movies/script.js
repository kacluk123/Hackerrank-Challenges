function beautifulDays(i, j, k) {
    let sum = 0
    for (let z = i; z <= j; z++ ){

        const g = z.toString().split('').reverse()
        const numReverse = z - Number(g.join(''))

        if(numReverse / k % 1 === 0 ){sum++}

    }
    return sum;
}
console.log(beautifulDays(949488, 1753821, 5005440))