function findDigits(n) {
    function toArrayString(number){
        function modulo(num, num1){
            return num % num1
        }
        let counter = 0
        number.toString()
            .split('')
            .map(num => Number(num) )
            .forEach(el=> modulo(n,el) === 0 ? counter++ : [] )
        return counter
    }

    return toArrayString(n)
}

console.log(findDigits(1012))