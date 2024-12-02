console.log(rahul()); // The function rahul will be hoisted along with its inner function
function rahul() {
  function innerRahul() {
    return "Hello from inner function of Rahul!";
  }
  return innerRahul();
}
