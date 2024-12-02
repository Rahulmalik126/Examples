function outerFunction() {
    var outerVar = "I am from variable in outer function";
  
    function innerFunction() {
      console.log(outerVar); // We can access outerVar from inner function
    }
  
    innerFunction();
  }
  
  outerFunction(); // I am from outer function variable
  