for (var i = 0; i < 3; i++) { // i is hoisted at global scope and can accessed outside the function as well
    console.log(i); 
  }
  console.log(i); 
  