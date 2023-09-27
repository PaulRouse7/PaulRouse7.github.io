//what does this return
new Set([1,1,2,2,3,4]) //{1,2,3,4}

//what does this return
[...new Set("referee")].join("") // "ref"

//what does this mean
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //that array and boolean value are paired

//write a function which accepts an array and returns true/false if there are any duplicates
const hasDuplicate = arr => new Set(arr).size !== arr.length

//write a function which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string
function checkVowel(char){
    return "aeiou".includes(char);
} 

function vowelCount(str){
    let smallStr = str.toLowerCase();
    const smallStrMap = new Map();
    for(let char of smallStr){
        if(checkVowel(char)){
            if(smallStrMap.has(char)){
                smallStrMap.set(char, smallStrMap.get(char)+1);
            }else {
                smallStrMap.set(char, 1);
            }
        }
    }return smallStrMap;
}