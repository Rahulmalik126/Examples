for (let i = 0; i < 3; i++) { // i is hoisted at function scope and can not be accessed outside the function
    console.log(i); 
  }
  console.log(i); // will through reference error