// function kaprekarNumbers(p, q) {
//     const arr = Array(q).fill(0).map((e,i)=>i+p).map(el=> (el*el).toString())
//     return arr
// }
// console.log(kaprekarNumbers(1,100))



    // .map(el => [(el * el).toString().substr(0, el.toString().length),
    //     (el * el).toString().substr(el.toString().length, (el * el).toString().length)])
function kaprekarNumbers(p, q) {
    let arr = [...Array(p)]
    for(let i = p; i <= q; i++){
        let number = (i*i).toString()
        number.length === 1 ? arr = [...arr, [Number(number)]] :
            arr = [...arr, [Number(number.substr(0, i.toString().length)),
                Number(number.substr(i.toString().length, number.length)) ]]
    }
    let arr2 = []
    arr.forEach((el,i)=>{
        if(el !== undefined){
            let x = el.reduce((a,b)=>{
                return a + b
            }, 0)
            if(x === i){
                arr2 = [...arr2, i]
            }

        }

    })
return arr2
}
console.log(kaprekarNumbers(1,100))
