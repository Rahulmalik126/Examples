var person = {
    name: "Rahul",
    greet: function() {
      console.log(this.name); // 'this' refers to the person object
    }
  };
  var name = "Malik";
  person.greet(); // Rahul
  