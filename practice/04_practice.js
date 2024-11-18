//4. Function Operations
//Write a function called sumArray that takes an array of numbers as an argument and returns the sum of the numbers.
//Create another function isPalindrome that checks if a string is the same forwards and backwards. Test it with words like "racecar" and "hello."
const Array=[1,2,3,4,5,6,7,8,9]
const sumArray=(Array)=>{
  return Array.reduce((acc,current)=>(acc+current),0)

}
const ArraySum = sumArray(Array);
console.log(ArraySum);

// check string using string metod
const isPalindrome=(s)=>{
  return s === s.split('').reverse().join('')
}
let word=["racecar","hello"]
word.forEach(words => {
  console.log(`Is '${words}' a palindrome? ${isPalindrome(words) ? 'Yes' : 'No'}`);
});
