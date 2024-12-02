console.log(innerRahul()); // Referenceerror as innerRahul is hoisted inside the function rahul and it is not invoked yet
function rahul() {
  function innerRahul() {
    return "Hello from inner function of Rahul!";
  }
  return innerRahul();
}
rahul();