function findFrequency(str) {
    let freq = new Map();
    for(let char of str) {
        if(char!= ' ' && freq[char]){
            freq[char]++
        }
        else{
            freq[char] = 1
        }
    }
    return freq
}
let str = "Programming"
//console.log(findFrequency(str.toLowerCase()))


function FindMaxFrequency(str) {
    let freq = findFrequency(str);

    let maxCount = 0;
    let maxOccChar = '';
    for(let char in freq)
    {
        if(freq[char]> maxCount){
            maxCount = freq[char];
            maxOccChar = char
        }
    }
    return {character: maxOccChar , count: maxCount}
}
console.log(FindMaxFrequency(str.toLowerCase()))