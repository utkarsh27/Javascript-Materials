function writeOccurences(str) {
  let result = ""
  let count =1;
  for(let i=0;i<str.length;i++){
      if(str[i] === str[i+1]){
          count++
      }
      else{
          result = result + str[i].repeat(count) + count;
          count = 1;
      }
  }
  return result;
}


let s = "aaaabbbccd"
console.log(writeOccurences(s))