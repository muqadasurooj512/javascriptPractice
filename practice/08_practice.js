//8. Functions with Default and Rest Parameters
//Write a function greet that takes a name and an optional greeting. If no greeting is provided, default to "Hello".
//Write another function addNumbers that can take any number of arguments and returns their sum.
const greet=(name,greeting="hello")=>{
   return `${name} ${greeting}!`
}
console.log(greet("urooj","hi"))

const sum=(...numbers)=>{     // ...numers in a fun is rest parameters .It allows  accept an indefinite number of arguments as an array
  return numbers.reduce((acc,current)=>(acc+current),0)

}
console.log(sum(2,5,6))