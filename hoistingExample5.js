console.log(rahul); // undefined as it will only hoist rahul variable and assign the function at run time
var rahul = function () {
  console.log("I'm a Rahul!");
};
rahul(); // I'm a Rahul will pe printed
