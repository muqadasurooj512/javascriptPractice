//10. Higher-Order Functions
//Create an array of numbers and use reduce to calculate the product of all numbers.
//Use map to create a new array from an existing one where each value is squared.
const Array=[1,2,3,4,5,6,7,8,9]
const ProductArray=(Array)=>{
  return Array.reduce((acc,current)=>(acc*current),1)

}
const ArrayProduct = ProductArray(Array);
console.log(ArrayProduct);

const SquareArray=(Array)=>{
  return Array.map((items)=>items**2)
}
const ArraySquare=SquareArray(Array)
console.log(ArrayProduct)