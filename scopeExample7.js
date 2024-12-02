var city = "Sonipat";

function changeCity() {
  city = "Bangalore"; // This modifies the global variable 'city'
}

changeCity();
console.log(city); // Bangalore will returned
