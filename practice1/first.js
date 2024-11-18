//Reverse a String
//Write a function that takes a string as an argument and returns the string reversed.
//For example, if the input is "hello", the output should be "olleh".
function Reverse(string) {
  return string.split('').reverse().join('')
}
console.log(Reverse('hello'))

//sum of Array Elements
//Given an array of numbers, write a function that returns the sum of all elements in the array.
//For example, for [1, 2, 3, 4], the output should be 10.
 function numbers(array) {

  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 }
 console.log(numbers([1, 2, 3, 4]))

 //Find the Largest Number
//Write a function that takes an array of numbers and returns the largest number in the array.
//For example, for [5, 12, 8, 23], the output should be 23.
function Largest(array) {
  return Math.max(...array)
}
console.log(Largest([5, 12, 8, 23]))

//Check for Even or Odd
//Write a function that takes a number and returns whether it is even or odd.
//For example, for 3, the output should be "Odd", and for 4, the output should be "Even".
function evenOdd(num) {
  if (num%2===0) {
    return 'even'
  } else {
    return 'odd'
  }
}
console.log(evenOdd(4))

//Count Occurrences of a Character
//Write a function that counts how many times a specific character appears in a string.
//For example, for the string "hello" and character "l", the output should be 2.
function count(str,char) {
  return str.split(char).length - 1;
}
console.log(count("hello", "l"))

//Remove Duplicates from an Array
//Write a function that takes an array and returns a new array without any duplicate values.
//For example, given the array [1, 2, 2, 3, 4, 4], the output should be [1, 2, 3, 4].
function removeDuplicates(arr) {
  return [...new Set(arr)]

}
const inputArray = [1, 2, 2, 3, 4, 4];
const resultArray = removeDuplicates(inputArray);
console.log(resultArray);

//Find Factorial of a Number
//Write a function to find the factorial of a given number.
//For example, for the number 5, the output should be 120 (5  4  3  2  1).
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const number = 5;
const result = factorial(number);
console.log(result);

//Fibonacci Sequence
//Write a function that returns the first n numbers in the Fibonacci sequence.
//For example, for n = 5, the output should be [0, 1, 1, 2, 3].

function fibonacciSequence(n) {
  if (n===0) {
    return []
  }
  if (n===1) {
    return [0]
  }
  let sequence=[0,1]
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2])

  }
  return sequence
}
const n = 10;
const results = fibonacciSequence(n);
console.log(results);

//Flatten an Array
//Write a function that flattens a nested array into a single array.
//For example, for the array [1, [2, 3], [4, [5, 6]]], the output should be [1, 2, 3, 4, 5, 6].
function flattens(arr) {
  return arr.flat(Infinity)
}
console.log(flattens([1, [2, 3], [4, [5, 6]]]))

// Find the Index of an Element
//Write a function that takes an array and an element as input, and returns the index of the element in the array.
//If the element is not found, return -1.
//For example, for the array [1, 2, 3, 4] and element 3, the output should be 2.
function findIndex(arr,element) {
  return arr.indexOf(element)
}
const array = [1, 2, 3, 4];
const element = 3;
const index = findIndex(array, element);
console.log(index);

//Sort an Array of Strings
//Write a function that takes an array of strings and sorts them alphabetically.
// For example, for the array ["banana", "apple", "cherry"], the output should be ["apple", "banana", "cherry"].
function sortArray(arr) {
  return arr.sort()
}
let array2= ["banana", "apple", "cherry"]
const sortArr=sortArray(array2)
console.log(sortArr)

// Check if a Number is Prime
//Write a function that takes a number as input and checks if it is a prime number.
//If it is prime, return true; otherwise, return false. For example, for 7, the output should be true.
function isPrime(number) {   // not divisible an other num
  if (number <= 1) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }

  }
  return true
}
console.log(isPrime('7'))

//Find the Second Largest Number
//Write a function that finds the second largest number in an array.
//For example, for the array [3, 1, 4, 1, 5, 9], the output should be 5.

function findSecondLargest(arr) {
  let uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr.length > 1 ? uniqueArr[1] : null;
}
console.log(findSecondLargest([3, 1, 4, 1, 5, 9])); // Output: 5


// Count Vowels in a String
//Write a function that takes a string and counts the number of vowels (a, e, i, o, u) in it.
//For example, for "hello world", the output should be 3.
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
          count++;
      }
  }

  return count;
}

const text = "hello world";
console.log(countVowels(text));

// Check Palindrome
//Write a function that checks if a given string is a palindrome.
// A string is a palindrome if it reads the same backward as forward.
//For example, for "madam", the output should be true.
function palindrome(str) {
  const normalizedStr = str.toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');
  return reversedStr===normalizedStr;

}
console.log(palindrome('madam'))

//Find Missing Number in an Array
//Given an array of numbers from 1 to n with one number missing, write a function that finds the missing number.
//For example, for the array [1, 2, 4, 5] and n = 5, the output should be 3.
function findMissingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
          return i;
      }
  }
  return null;
}
const numbermiss = [1, 2, 4, 5];
const nummiss = 5;
console.log(findMissingNumber(numbermiss, nummiss));

//Create a Countdown Timer
//Write a function that takes a number (representing seconds) and
//creates a countdown timer that prints the seconds remaining until it reaches 0.
//For example, for 5, it should print 5, 4, 3, 2, 1, 0.
 function countdown(seconds) {
  const timer= setInterval(() => {
    console.log(seconds)
    if (seconds===0) {
      clearInterval(timer)
      console.log("Countdown complete!")
    }
    seconds--
  }, 1000);
 }
 countdown(5);

 //Convert Celsius to Fahrenheit
//Write a function that converts a temperature from Celsius to Fahrenheit.
//The formula for the conversion is: Fahrenheit = (Celsius * 9/5) + 32.
//For example, for 25°C, the output should be 77°F.
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
const temperatureCelsius = 25;
const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(`${temperatureCelsius}°C is equal to ${temperatureFahrenheit}°F.`);

//Sum of Even Numbers
//Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
//For example, for [1, 2, 3, 4, 5], the output should be 6.
 function sumEven(num) {
  let sum=0
  for (let number of num) {
    if (number%2===0) {
      sum +=number
    }
  }
  return sum;
 }
 const numbersArray = [1, 2, 3, 4, 5];
const evenSum = sumEven(numbersArray);
console.log(`The sum of even numbers is: ${evenSum}`);

 //Create a Simple Timer
//Write a function that simulates a simple timer. It should start at a given time and count down to zero, logging each second.
//For example, if you start at 5, it should log 5, 4, 3, 2, 1, 0.
function countdownTimer(startTime) {
  let time = startTime;
  const timer = setInterval(() => {
      console.log(time);
      time--;
      if (time < 0) {
          clearInterval(timer);
          console.log("Time's up!");
      }
  }, 1000); // 1000 milliseconds = 1 second
}
countdownTimer(5);
