
//Method 1: Using Set Approach
function findDuplicates(str) {
    let dups = new Set();
    let uniq = new Set();

    for(let item of str.toLowerCase()){
        if(uniq.has(item)){
            dups.add(item)
        }
        else {
            uniq.add(item)
        }
    }
    return dups
}
const str = "India"
//console.log(findDuplicates(str))


//Method 2: Using for of loop (without using Set)
function findDuplicatesWithoutSet(str) {
    let results = []
    let seen = []
   for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).toLowerCase(); // case-insensitive
        if (seen.includes(char)) {
            if (!results.includes(char)) { // avoid pushing same duplicate multiple times
                results.push(char);
            }
        } else {
            seen.push(char);
        }
    }
    return results
}
const st = "India"
console.log(findDuplicatesWithoutSet(st.toLowerCase()))