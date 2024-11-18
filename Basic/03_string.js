// method of string

// string concatinate two method 1. + , `` backticks   ${}  mean string interpulation


const name = new String('urooj')   // string object
// length, upercase, lowercase, charAt, indexof
console.log(name[0]); // keyvalue access
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('o'));
// substring , slice
const newstring= name.substring(0,4)
console.log(newstring)
const string= name.slice(-5,3) // use nagative index
console.log(string)
// trim , replace , includes, split
const trim= "    Ali   "
console.log(trim)
console.log(trim.includes('haider'))
console.log(trim.trim())
const replaces= "    Ali_haider_07  "
console.log(replaces.replace('haider', 'hamza'))

console.log(replaces.split('_')) // output in array