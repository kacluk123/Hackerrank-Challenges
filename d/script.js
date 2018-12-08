function kaprekarNumbers(p, q) {
    const arr = Array.from({length: q}, (v, k) => k+p+1)
        .map(el => [(el * el).toString().substr(0, el.toString().length),
            (el * el).toString().substr(el.toString().length, (el * el).toString().length)])
    return arr
}
console.log(kaprekarNumbers(6, 100))

