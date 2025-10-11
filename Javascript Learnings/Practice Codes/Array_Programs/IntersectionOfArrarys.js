//[1,2,3], [2,3,4] → Output: [2,3]
function findIntersection(arr1, arr2) {
    let result = []
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                result.push(arr2[j])
            }
           
        }
    }
    return result
}
console.log(findIntersection([1,2,3,6], [2,3,4,6]))