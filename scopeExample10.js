
function displayGlobal() {
  console.log(globalVariable); // undefined as globalVariable is not initialized after function call
}
displayGlobal(); // I am global!
var globalVariable = "I am global!";

