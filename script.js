function howManyGames(p, d, m, s) {
    let tab = []
    let num = 0
    for(let i = p; i > m; i = i - d){
        num = num + i
        tab = [...tab, i]
    }
    while(num <= s){
        if (num + m > s){
            break
        } else {
            num = num + m
            tab = [...tab, m]
        }

}
return p > s ? 0 : tab.length
}

console.log(howManyGames(100, 19, 1, 180))