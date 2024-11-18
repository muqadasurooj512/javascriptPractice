//arrys
/*const a=[1,2,3,4,5,6]
console.log(a[3])
const array=new Array(1,2,3,4,5)
console.log(array[3])
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
console.log(type)
// basic array method
console.log(type.length)
console.log(fruits.toString())
console.log(fruits.at(2)) // element check with index
console.log(fruits.join('*'))
console.log(fruits.pop())
console.log(fruits.push('Mango'))
console.log(fruits)
console.log(fruits.shift())
console.log(fruits)
console.log(fruits.unshift('lemon'))
console.log(fruits)
console.log(fruits.unshift('potato'))
console.log(fruits)
console.log( delete fruits[2])
console.log(fruits)
const myGirls = ["urooj", "fatima"];
const myBoys = ["ali", "hamza", "hussain", "haider", "bilal"];

console.log(myGirls.concat(myBoys)) ;
console.log( myBoys.copyWithin(2,0))// mean 2 index element overwrite with o index 2 value change
console.log( myBoys.copyWithin(2,0,3))
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // merage all array element nested in one array into  in one array
console.log(newArr)

// splice and slice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"))// 2,0  where element added , 0 removed element
console.log(fruits)
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1)) // not change original array
console.log(months)
const citrus = fruits.slice(3); // not change original array just change new array
console.log(citrus)
console.log(fruits)


// sorting array Alphabetic
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(fruits.toSorted()) // save method not change original array
console.log(fruits.toReversed())*/
// Sorting Object Arrays
// object sort with string people.sort((a, b) => a.name.localeCompare(b.name));
// people.sort((a, b) => a.age - b.age); number sort

// array iteration
// foreach method Executes a provided function once for each array element
const numbers = [1, 2, 3,4];
numbers.forEach(num => {
    console.log(num); // Outputs: 1, 2, 3
});
//map
const doubled = numbers.map(num => num * 2);// apply method in all element of calling array in calling fun
console.log(doubled);
const filterout = numbers.filter(num => num%2===0);
console.log(filterout)

const sum = numbers.reduce((accumulator, current) => accumulator + current, 100); // accumulator mean initial value add current vslue
console.log(sum);
const everys = numbers.every(num => num%2===0); // test array element with fun
console.log(everys)
const somes = numbers.some(num => num%2===0); // test array element with fun
console.log(somes)
// create new array object array like
//const str = 'hello'
const str = [20,30,40];
const chars = Array.from(str.keys());
console.log(chars);
const array = [4, 2, 3];
const updatedArray = array.with(1, 20); // replace 1 index value into 20
console.log(updatedArray);
