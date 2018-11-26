function funnyString(s) {

    const arr = s.split('').map((el) => `${el}`.charCodeAt(0))
    const arrReverse = [...arr].reverse();
    let emptyArr = [];
    let emptyArrReverse = [];
        for (let i = 0; i < arr.length; i++) {
                let x = arr[i + 1] - arr[i]
                let y = arrReverse[i + 1] - arrReverse[i]
                isNaN(y) !== true ? emptyArrReverse = [...emptyArrReverse, Math.abs(y)] : []
                isNaN(x) !== true ? emptyArr = [...emptyArr, Math.abs(x)] : []

    }
        return JSON.stringify(emptyArr) === JSON.stringify(emptyArrReverse) ? 'Funny' : "Not Funny"
}


console.log(funnyString("acxz"))