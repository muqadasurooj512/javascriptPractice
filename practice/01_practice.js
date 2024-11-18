//1. Working with Objects
//Create an object called student with properties: name, age, grade, and a method greet that logs "Hello, my name is [name]."
const student={
  name:"urooj",
  age:"24",
  grade:80,
  greet:function () {
    console.log(`Hello my name is ,${this.name}`)   // javascript object method
  },
  //Add a method increaseGrade that increments the student’s grade by 1. Test it by calling the method and printing the updated grade.
  increaseGrade:function(){
    this.grade+=1;
     console.log(`student grade is ,${this.grade}`)
  }
}

student.greet();
student.increaseGrade(
);
