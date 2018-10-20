


function compareTriplets(a, b) {
    let aCounter = 0;
    let bCounter = 0;
    for(let i=0; a.length > i; i++){
        if(a[i] > b[i]){
            aCounter++
        } else if(a[i] < b[i]){
            bCounter++
        }
    }
    let arr = [aCounter, bCounter]
    return arr;
}
const arr1 = [3,3,4,3,3,4]
const arr2 = [2,2,2,2,2,2]

compareTriplets(arr1,arr2);