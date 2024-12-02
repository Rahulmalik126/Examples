function counter() {
    var count = 5;
    let increment = function() {
      count++; // 'count' is accessed through the closure
      console.log(count);
    };
    return increment;
  }
  
  var obj = counter();
  obj(); // 6
  obj(); // 7
  