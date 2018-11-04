function minimumDistances(a) {
    const arr = []
    a.forEach((el, i) => {
        let x = a.indexOf(el, i + 1)
        i - x < 0 ? arr.push(i - x) : null
        return arr

    })
    if (arr != undefined && arr.length > 0) {
        const g = arr.map((el) => Math.abs(el)).sort((a, b) => a - b)
        return g[0]
    } else {
        return -1
    }
}
console.log(minimumDistances([7, 1, 3, 4, 1, 7]))