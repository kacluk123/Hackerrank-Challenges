function alternatingCharacters(s) {
    let x = 0;
    const tab = s.split('')
    for(let i = 0; i < tab.length; i++){
        if(tab[i] === tab[i-1]){
            x++
        }
    }
    return x
}


console.log(alternatingCharacters('ABABABAB'))