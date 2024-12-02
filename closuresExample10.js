function createCounters() {
    var counters = [];
    
    for (let i = 0; i < 3; i++) {
      counters.push(function() {
        console.log(i); // Each closure captures its own 'i'
      });
    }
    
    return counters;
  }
  
  var counterFunctions = createCounters();
  
  // Calling each function created in the loop
  counterFunctions[0](); // 0
  counterFunctions[1](); // 1
  counterFunctions[2](); // 2
  