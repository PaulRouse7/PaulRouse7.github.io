// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


//ES2015 version using Rest and arrow functions
const myFilterOutOdds = (...args) => args.filter(num => num % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (object1, object2) => ({...object1, ...object2})

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg *2)]

//function removeRandom(items) 
const removeRandom = (items) => {
   let idx = (Math.floor(Math.random() * items.length));
   return [...items.slice(0,idx), ...items.slice(idx + 1)];
}

//function extend(array1, array2)
const extend = (arr1, arr2) => [...arr1, ...arr2]

//function addKeyVal(obj, key, val)
const addKeyVal = (obj, key, val) => ({...obj, [key]:val}) 

//function removeKey(obj, key)
const removeKey = (obj, key) => ({[key]: undefined, ...obj})

//function combine(obj1, obj2)
const combine = (obj1, obj2) => ({...obj1, ...obj2})

//function update(obj, key, val)
const update = (obj, key, val) => ({...obj, [key]:val})