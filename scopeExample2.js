function greet() {
    var age = 24; // This 'age' variable is function-scoped
    console.log("I am " + age + " years old.");
  }
  
  greet(); // I am 24 years old
  console.log(age); // Error: age is not defined, it doesn't exist outside greet()
  