function greet(name) {
    console.log("Hello, " + name); // 'name' is accessible only inside the function
  }
  
  greet("Rahul"); // Hello, Rahul
  console.log(name); // ReferenceError: name is not defined
  