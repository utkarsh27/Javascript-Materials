function isPaliandrome(str){
    let isPal = false;
    let reversedStr = str.split(' ').reverse().join(' ')
    console.log(reversedStr)
    if(reversedStr === str){
        isPal = true
    }
    return isPal;
}
console.log(isPaliandrome("Bank"))