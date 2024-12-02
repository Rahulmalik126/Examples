function multiplier(factor) {
    return function(number) {
      return number * factor; // 'factor' is captured by the closure
    };
  }
  
  var multiplyBy3 = multiplier(3);
  console.log(multiplyBy3(4)); // 12

  