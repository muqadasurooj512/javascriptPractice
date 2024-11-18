//Data objects s
const d = new Date()// current datatime
//console.log(d.toString())
let myData = new Date() //pass string data
//console.log(myData.toString())
const data = new Date(2018, 11, 24, 10, 33, 30); //use 6,4 ,3 and 2 num for show datq time month etc
//console.log(data.toDateString())
const e = new Date(100000000000)// milliseconds

//date method and formart is long and short long mar , short 03/
// tostring , todatestring
//console.log(e.toDateString())
//console.log(e.toUTCString()) // usa data standard
//console.log(e.toISOString())// international or YYYY-MM-DD and it is format 1 only show year ,year month ect

let msec = Date.parse("March 21, 2012"); // show data in milisecond

//console.log(msec)

// get date method
/*console.log(myData.getDate())
console.log(myData.getFullYear())
console.log(myData.getTime())
console.log(myData.getHours())
console.log(myData.getTimezoneOffset())
console.log(myData.getSeconds())
console.log(myData.getTimezoneOffset()) // difference in min*/
// set method
console.log(myData.setDate(25))
console.log(myData.setFullYear(2020))
console.log(myData.setTime(10000))
console.log(myData.setHours(22))
console.log(myData.setMonth(11))