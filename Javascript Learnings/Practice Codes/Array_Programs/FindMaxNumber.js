//Method 1: Traditional using for loop
function findMax(arr) {
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
//console.log(findMax([1,3,4,7,2]));

// Method 2: Using inbuilt function

function findMaxUsingInbuiltFunction(arr) {
    return Math.max(...arr)
}
//console.log(findMaxUsingInbuiltFunction([1,3,4,7,2]));

//Method 3: Using In Build Function - toSorted()
function findMaxUsingSortFunction(arr) {
    let newArr = arr.sort((a, b) => a - b)
    return newArr[newArr.length-1]
}

console.log(findMaxUsingSortFunction([1,3,4,7,2]));