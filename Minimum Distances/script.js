function minimumDistances(a) {
    let counter = 0
    const arr = []
    for (let i = 0; i < a.length; i++) {
        let x = a.indexOf(a[i], i + 1)
        let c = i - x
        if (c < 0) {
            arr.push(c)
        }
    }
    if (arr != undefined && arr.length > 0) {
        const g = arr.map((el) => Math.abs(el)).sort((a, b) => a - b)
        return g[0]
    } else {
        return -1
    }
}
console.log(minimumDistances([7, 1, 3, 4, 1, 7]))