//Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
function shiftZeros(arr) {
    let result = []
    let zeros = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            zeros.push(arr[i])
        }
        else{
            result.push(arr[i])
        }
    }
    return [...result, ...zeros]
}

console.log(shiftZeros([0,1,0,3,12]))