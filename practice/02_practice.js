//2. Array Manipulations
// Create an array called fruits with items: "apple," "banana," "mango," and "orange."
// Add "grape" to the end of the array and "lemon" to the beginning.
// Remove "banana" from the array and log the updated array.
// Sort the array alphabetically and display the result.
let fruits=["apple" ,"banana", "mango","orange"]
fruits.push("grape")
fruits.unshift("lemon")
console.log(fruits)
fruits=fruits.filter((items)=>{return items!=="banana"})
//delete(fruits[2])
console.log(fruits)
fruits.sort();
console.log(fruits)
