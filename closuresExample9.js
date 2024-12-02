function createCounters() {
    var counters = [];
    
    for (var i = 0; i < 3; i++) {
      counters.push(function() {
        console.log(i); // The closure captures the value of 'i'
      });
    }
    
    return counters;
  }
  
  var counterFunctions = createCounters();
  
  // Calling each function created in the loop
  counterFunctions[0](); // 3
  counterFunctions[1](); // 3
  counterFunctions[2](); // 3
  