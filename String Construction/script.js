function stringConstruction(s) {
    let emptyArr = [];
    const x = s.split("")
        x.forEach((el)=>{
            emptyArr.indexOf(el) === -1 ? emptyArr = [...emptyArr, el] : [];
        })
    return emptyArr.length
}

console.log(stringConstruction('abababc'))