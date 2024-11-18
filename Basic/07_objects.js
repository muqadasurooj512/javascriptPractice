const obj1= {
  name:"urooj",
  age:24,
}
console.log(obj1.age);
console.log(obj1["name"]);
// method
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
      return this.firstName + " " + this.lastName;
  },
  greeting: function() {
      console.log("Hello, my name is " + this.fullName() + " and my ID is " + this.id + ".");
  }
};

// Using the properties and methods
console.log(person.fullName()); // Output: John Doe
person.greeting(); // Output: Hello, my name is John Doe and my ID is 5566.
  // object constructor
  const object1= new Object()
  object1.id="1234"
  object1.name="urooj"
  console.log(object1)