// Method 1 using traditional for loop approach
function reverseStr(str){
    let reversed =  '';
    for(let i=str.length-1;i>=0;i--){
        reversed =  reversed + str[i]
    }
    return reversed;
}

const str = "Hello world";
//console.log(reverseStr(str).toLocaleLowerCase());

//Method 2: using inbuilt functions
function reverseStrWithInbuiltFunction(str){
    return str.split('').reverse().join('')
}
//console.log(reverseStrWithInbuiltFunction(str).toLocaleLowerCase());


//Method 3: Reverse letters of words without changing its position
function reverseWordsWithoutPosition(str) {
    let words = str.split(' ');
    let results = [];

    for(let word of words){
        let reversed = '';
        for(let i=word.length-1;i>=0;i--){
            reversed = reversed + word[i];
        }
        results.push(reversed);
    }
    return results.join(' ')
}
console.log(`reversing string without changing words position\n`+reverseWordsWithoutPosition(str));