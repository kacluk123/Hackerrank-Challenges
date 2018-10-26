function camelcase(s) {
    const arr = s.split('')
    let counter = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            counter++
        }
    }
    return counter
}


console.log(camelcase('HelloWorld'))