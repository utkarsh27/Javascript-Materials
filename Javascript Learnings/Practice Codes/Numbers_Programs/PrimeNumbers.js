function checkPrime(num) {
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}
//console.log(checkPrime(5))


// write all prime numbers from 1 to 10
function returnPrime(arr) {
    let result = []
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        if(num<=1){
            continue
        }
        let isPrime = true;
        for(let j=2;j<=Math.sqrt(num);j++){
            if(num%j===0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            result.push(num)
        }
        
    }
    return result
}
console.log(returnPrime([1,2,4,6,7,9]))