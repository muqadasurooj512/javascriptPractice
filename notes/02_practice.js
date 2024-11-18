//2.	Create a function named add that takes two numbers as parameters and returns their sum.
function add(a, b) {
  return a + b
}
let addNum = add(3, 5)
console.log(addNum)
//3.	Write a function named isEven that takes a number as a parameter and returns true if the number is even, and false if it is odd
function isEven(number) {
  return number % 2 === 0

}
console.log(isEven(5))
//4.	Create a function named multiplyByTen that takes a number as a parameter, multiplies it by 10, and returns the result
function multiplyByTen(number) {
  return number * 10
}
console.log(multiplyByTen(5))
//5.	Write a function named square that takes a number as a parameter and returns the square of that number.
function square(number) {
  return number * number   //number**2
}
console.log(square(4))
//6.	Create a function named findMax that takes three numbers as parameters and returns the largest one
function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {

    return num1

  } else if (num2 > num1 && num2 > num3) {  //return Math.max(num1,num2,num3);
    return num2
  }
  else {
    return num3
  }
}
console.log(findMax(2, 1, 4))
//7.	Write a function named isPalindrome that takes a string as a parameter and returns true if the string
//    is a palindrome (reads the same forwards and backwards), and false otherwise.
function isPalindrome(str) {
  return str === str.split('').reverse().join('')
}
console.log(isPalindrome('hello'))
//	Create a function named calculateGrade that takes a score as a parameter and returns the grade based on the score (A, B, C, D, F).
function calculateGrade(score) {

  switch (true) {
    case (score >= 90):
      return 'A'
    case (score >= 80):
      return 'B'
    case (score >= 70):
      return 'C'
    case (score >= 60):
      return 'D'
    default:
      return 'F'
  }
}
console.log(calculateGrade(75))
//9.	Write a function named factorial that takes a number as a parameter and
//    returns the factorial of that number (e.g., factorial(5) should return 120).
function factorial(n) {  // 5!=5*4*3*2*1
  if (n < 0) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {   //  return n * factorial(n - 1);  // recurcive call
    result *= i;
  }
  return result;
}
console.log(factorial(5));

//10.	Create a function named reverseString that takes a string as a parameter and returns the string in reverse order.
function reverseString(str) {
  return str.split('').reverse().join('')
}
console.log(reverseString('urooj'))

//11.	Write a function named fibonacci that takes a number n as a parameter and returns the nth Fibonacci number
function fibonacci(n) {   // 0,1,1,2,3,5....
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");

  }
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  let a = 0
  let b = 1;
  let fib = 1
  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }

  return fib;
}
console.log(fibonacci(10));

// 12.	Create a function named countVowels that takes a string as a parameter and returns the number of vowels (a, e, i, o, u) in the string.
function countVowels(str) {
  const vowels = 'aeiouAEIOU'
  let count = 0
  for (const char of str) {
    if (vowels.includes(char)) {
      count++
    }

  }
  return count
}
console.log(countVowels("Hello, World!"))
//13.	Write a function named findLargestElement that takes an array of numbers as a parameter and returns the largest element in the array.
function findLargestElement(arr) {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty.");
  }
  let largest = arr[0]
  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }

  }
  return largest;
}
console.log(findLargestElement([3, 4, 5, 6, 7]))

//14.	Create a function named removeDuplicates that takes an array as a parameter and returns a new array with all duplicate elements removed
function removeDuplicates(arr) {
  const uniqueElement = [];
  for (const element of arr) {
    if (!uniqueElement.includes(element)) {
      uniqueElement.push(element)
    }
  }
  return uniqueElement

}
console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
//	Write a function named isPrime that takes a number as a parameter and returns true if the number is a prime number, and false otherwise.
function isPrime(number) {   // not divisible an other num
  if (number <= 1) {
    return false
  }

  for (let i = 2; i < 2; i++) {
    if (num % i === 0) {
      return false
    }

  }
  return true
}
console.log(isPrime('11'))

//Write a function named calculate that takes two numbers and an operator as parameters (+, -, *, /) and returns the result of the operation.
function calculate(a, b, operator) {
  switch (operator) {
    case ('+'):

      return a + b
    case ('-'):

      return a - b
    case ('*'):

      return a * b
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero';
      }
      return num1 / num2;

    default:
      return 'Error: Invalid operator';
  }
}

//Create a function named mergeArrays that takes two arrays as parameters and returns a new array that merges them together in alternating order
function mergeArrays(arr1,arr2) {
  const merged=[]
  const length = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    if (i<arr1.length) {
      merged.push(arr1[i])
    }
    if (i<arr2.length) {
      merged.push(arr2[i])
    }
  }
  return merged
}
console.log(mergeArrays([1, 3, 5], ['a', 'b', 'c']));

// Write a function named findLongestWord that takes a sentence as a parameter and returns the longest word in the sentence.
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog";
const longest = findLongestWord(sentence);
console.log(longest);

//Create a function named generateRandomArray that takes a number n as a parameter and returns an array of n random numbers between 1 and 100
function generateRandomArray(n) {
const randomArray=[]
for (let i = 0; i <n; i++) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNum);

}
return randomArray
}
const randomNumbers = generateRandomArray(10);
console.log(randomNumbers);
//20.	Write a function named convertToRoman that takes a number as a parameter and returns its Roman numeral representation.