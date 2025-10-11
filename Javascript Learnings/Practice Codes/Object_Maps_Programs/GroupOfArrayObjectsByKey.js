// [
//   {name: "A", dept: "QA"},
//   {name: "B", dept: "DEV"},
//   {name: "C", dept: "QA"}
// ]

function groupArrayObjectsByKey(arr) {
    let myMap = new Map();
    for(let {name, dept} of arr){
        if(!myMap.has(dept)){
            myMap.set(dept, [])
        }
        myMap.get(dept).push({name})
    }
    const grouped = Object.fromEntries(myMap)
    return grouped
}


let arrObj = [
  {name: "A", dept: "QA"},
  {name: "B", dept: "DEV"},
  {name: "C", dept: "QA"}
]

console.log(groupArrayObjectsByKey(arrObj))