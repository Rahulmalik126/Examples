var name = "Rahul"; // Global scope

function display() {
  var name = "Rahul the Developer"; // Local scope, this 'name' shadows the global one
  console.log(name); // "Rahul the Developer"
}

display();
console.log(name); // "Rahul"
