function outer() {
    var name = "Rahul"; // 'name' is defined in outer
    
    function inner() {
      console.log("Hello, " + name); // 'inner' function can access 'name' from outer
    }
    
    return inner;
  }
  
  var greeting = outer();
  greeting(); // Hello, Rahul
  