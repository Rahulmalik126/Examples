function createCounter() {
    var count = 0; // 'count' variable is in the outer function's scope
    
    return function() {
      count++; // 'count' is incremented each time the closure is called
      console.log(count);
    };
  }
  
  var counter = createCounter();
  counter(); // will print 1
  counter(); // will print 2
  counter(); // will print 3
  