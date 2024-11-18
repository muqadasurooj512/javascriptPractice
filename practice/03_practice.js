// 3. Filter and Map Functions
// Create an array of objects where each object represents a product with properties name, price, and category.
// Write a function that filters out products whose price is less than 50.
// Write another function that maps through the array to add a property inStock with a random Boolean value (true/false).

const products = [
  {
    name: "computer",
    price: 15000,
    category: "electronic",
  },
  {
    name: "tea",
    price: 50,
    category: "food",
  },
  {
    name: "mobile",
    price: 15000,
    category: "electronic",
  },

]
 const  productFilter=(products)=>{
  return products.filter(items =>
    items.price < 50
  )
 }


const InStock=(products)=> {
  return products.map(product => ({
      ...product,    ///spread opreator use for copy all object of the array into new array
      inStock: Math.random() < 0.5 // Randomly assign true or false
  }));
}

const filterProduct = productFilter(products);
const productInStock = InStock(filterProduct);
console.log(productInStock);
