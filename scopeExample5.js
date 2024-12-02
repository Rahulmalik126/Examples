function outerFunction() {
    console.log(innerVar); // We can access innerVar from Outer function
    function innerFunction() {
        var innerVar="I am from variable in outer function";
    }
  
    innerFunction();
  }
  
  outerFunction(); // ReferenceError: innerVar is not defined
  