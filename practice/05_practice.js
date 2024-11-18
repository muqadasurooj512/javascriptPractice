//Object Arrays Sorting
//Create an array of employee objects, each with properties name, age, and salary.
//Write a function that sorts employees by salary in descending order and logs the sorted array.
let employees=[
  {
    name :"urooj",
    age:24,
    salary:15000
  },
  {
    name :"ali",
    age:25,
    salary:18000
  },
  {
    name :"hamza",
    age:26,
    salary:13000
  },
  {
    name :"fatima",
    age:27,
    salary:25000
  }

]
const sortEmployees= (employeeArray) => {
  return employeeArray.sort((a, b) => b.salary - a.salary);// sort array in decending order
};
const sortedArray= sortEmployees(employees);
console.log(sortedArray);