//input : [1,4,5,6,2] output: [240,60,48,40,120]
function calculteProd(arr) {
    let prod = []
    for(let i=0;i<arr.length;i++){
        let result = 1;
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                result = result * arr[j]
            }
        }
        prod.push(result)
    }
    return prod
}

console.log(calculteProd([1,4,5,6,2]))