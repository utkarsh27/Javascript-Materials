
function countFreqWords(str) {
    let st = str.split(' ');
    let myMap = new Map()    
    for(let word of st){
        if(myMap.has(word)){
           myMap.set(word, myMap.get(word)+1)
        }
        else{
            myMap.set(word,1)
        }
    }
    return myMap
}

console.log(countFreqWords("This is is a test"))