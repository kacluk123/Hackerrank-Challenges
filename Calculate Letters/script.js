function calculateLetters(tab, tab1){
    const newTab = tab.concat(tab1).replace(/\s/g, '').split("")
    const reducedTab = newTab.reduce((a,b)=>{
        a[b] ? a[b]++ : a[b] = 1
        return a

    }, {})

    for(key in reducedTab){
        console.log(`${key} : ${reducedTab[key]}`)
    }
}
calculateLetters("Ola ma psa","ala ma kota")