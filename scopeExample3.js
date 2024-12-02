function checkScope() {
    if (true) {
      let name = "Rahul"; // This 'name' is block-scoped
      console.log(name); // 24
    }
    console.log(name); // ReferenceError: age is not defined
  }
  
  checkScope();
  