function closestNumbers(arr) {
    let arr1 = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            arr1 = [...arr1, {num : Math.abs(arr[i] - arr[j]), str : `${arr[j]} ${arr[i]}` }]
        }

    }
    arr1.sort((a,b) => a.num - b.num)
    let arr2 = []
    for(let c = 0; c < arr1.length; c++){
        if(arr1[c].num === arr1[0].num){
            arr2.push(arr1[c].str)
        }
    }
    return arr2
}
console.log(closestNumbers([-20 ,-3916237, -357920, -3620601 ,7374819 ,-7330761 ,30, 6246457, -6461594 ,266854 ]))