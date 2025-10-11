//Input: [1,2,3,5] → Output: 4

function findMissingNumber(arr) {
    
    let resultNum ;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] + 1 != arr[i+1]){
            resultNum = arr[i]+1
        }
    }
    return resultNum
}
console.log(findMissingNumber([1,2,3,5]))