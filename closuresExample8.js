function counter() {
    var days = 9;
    let working = function() {
      days++; // 'count' is accessed through the closure
      console.log(days);
    };
    return working;
  }
  
  var workDays = counter();
  workDays(); // 10
  workDays(); // 11
  