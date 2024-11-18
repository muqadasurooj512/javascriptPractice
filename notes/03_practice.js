//1.	Create an array named fruits containing the following elements: "apple", "banana", "orange", "mango", "grape".
//     Write a script to print each element of the array.
let fruits = ['apple', 'banana', 'orange', 'mango', 'grape']
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])          // fruits.foreach(function(fruit){console.log(fruit)})

}

//2.	Write a function named getFirstElement that takes an array as a parameter and returns the first element of the array.
function getFirstElement(arr) {
  return arr[0]
}
const array = getFirstElement([4, 5, 8])
console.log(array)

// 3.	Create an array of numbers [10, 20, 30, 40, 50]. Write a script to calculate and print the sum of all elements in the array.
let numbers = [10, 20, 30, 40, 50]
let totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("The sum of all elements in the array is:", totalSum);

//4.	Write a function named findElement that takes an array and an element as
//   parameters and returns true if the element is found in the array, and false otherwise.

function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true
    }
  }
  return false
}
console.log(findElement([1, 2, 3, 4, 5], 3));

//5.	Create an array named colors with at least five elements. Write a script to print the length of the array
let colors = ['red', 'green', 'blue', 'black', 'orange']
console.log(colors.length)

//6.	Write a function named reverseArray that takes an array as a parameter and returns a new array with the elements in reverse order.
function reverseArray(arr) {

  return arr.slice().reverse() // slice not change original arrow create copy
}
const reverse = (reverseArray([4, 5, 6, 7]))
console.log(reverse)

//7.	Create a function named findMaxInArray that takes an array of numbers as a parameter and returns the largest number in the array
function findMaxInArray(arr) {
  return Math.max(...arr)
}
console.log(findMaxInArray([4, 6, 8, 6]))

//8.	Write a function named removeElement that takes an array and an element as parameters
//   and returns a new array with all occurrences of that element removed
function removeElement(arr, element) {
  return arr.filter(item => item !== element)
}
let remove = removeElement([3, 4, 5, 6], 5)
console.log(remove)
// 9.	Create a function named mergeArrays that takes two arrays as parameters and
//      returns a new array that contains all elements from both arrays.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}
let newArray = mergeArrays([2, 4, 5], [5, 8, 9, 5])
console.log(newArray)

// 10.	Write a function named filterEvenNumbers that takes an array of numbers as
//      a parameter and returns a new array containing only the even numbers.
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 == 0)
}
const filterNum = filterEvenNumbers([4, 8, 6, 5, 9])
console.log(filterNum)

//11.	Create a function named flattenArray that takes a nested array (e.g., [[1, 2], [3, 4], [5, 6]]) as a
//     parameter and returns a single, flat array (e.g., [1, 2, 3, 4, 5, 6]).

function flattenArray(arr) {
  return arr.flat()
}
let arrayFlat = flattenArray([[1, 2], [3, 4], [5, 6]])
console.log(arrayFlat)

// 12.	Write a function named uniqueElements that takes an array
//  as a parameter and returns a new array with all duplicate elements removed.
function uniqueElements(arr) {
  return [... new Set(arr)]
}
let unique = uniqueElements([2, 4, 5, 6, 7, 5, 3, 2, 7])
console.log(unique)

//13.	Create a function named rotateArray that takes an array and a number n as parameters, and returns a new
///    array where the elements are rotated n positions to the right.
function rotateArray(arr, n) {
  n = n % arr.length
  return [...arr.slice(-n), ...arr.slice(0, arr.length - n)]
}
const arrayy = [1, 2, 3, 4, 5, 6];
const n = 2;
const rotatedArray = rotateArray(arrayy, n);

console.log(rotatedArray);

// 14.	Write a function named findCommonElements that takes two arrays as parameters
//      and returns a new array containing the common elements between both arrays.
function findCommonElements(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);

console.log(commonElements);

// 15.	Create a function named chunkArray that takes an array and a number size as parameters, and splits the array
//       into smaller arrays of the specified size.
//       For example, chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].
function chunkArray(arr,size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));