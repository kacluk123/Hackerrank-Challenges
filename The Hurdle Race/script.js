function hurdleRace(k, height) {
    const x = height.sort((a, b) => b - a)
    return x[0] > k ? x[0] - k : 0
}


console.log(hurdleRace([1,5,3,2,7,3,5], 7))