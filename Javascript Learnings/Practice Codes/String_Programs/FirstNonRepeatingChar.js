//Input: "aabbcdde" → Output: "c"

//Method 1: using traditional for loops
function firstNonRepeatingChar(str) {
    let st = str.split('')
    let nonReps = [];
   
    for(let i=0;i<st.length;i++){
         let isRep = false
        for(let j=0;j<st.length;j++){
            if(i!==j && st[i] === st[j]){
                isRep = true;
                break;
            }
        }
        if(!isRep){
        nonReps.push(st[i])
        break;
    }
    }
    
    return nonReps
}
//console.log(firstNonRepeatingChar("aabbcdde"))



//Method 2: Using Map frequency
function firstNonRepeatingChar(str) {
    let charFreq = new Map()
    for(char of str){
        if(charFreq.has(char)){
            charFreq.set(char, charFreq.get(char)+1)
        }
        else{
            charFreq.set(char,1)
        }
    }
    for(let ch of str){
        if(charFreq.get(ch) === 1){
            return ch
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("aabbcdde"))