function createPerson(name, age) {
    return function() {
      console.log(name + " is " + age + " years old.");
    };
  }
  
  var person = createPerson("Rahul", 24);
  person(); // Rahul is 24 years old
  