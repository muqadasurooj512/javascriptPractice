//9. Working with Date and Time
// Write a function calculateAge that takes a birth year and calculates the current age.
// Write another function isWeekend that takes a date as input and returns true if the date falls on a weekend, otherwise returns false.
const calculateAge =(year)=>{
  let current=new Date()
  return current.getFullYear() - year

}
const age = calculateAge(1990);
console.log(`Age: ${age}`);

const isWeekend=(date)=>{
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
}
const dateCheck = '2024-10-26';
console.log(`Is ${dateCheck} a weekend? ${isWeekend(dateCheck)}`);
