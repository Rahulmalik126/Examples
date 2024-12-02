function delayedMessage() {
    var message = "Hello after 2 seconds!";
    var timeset=2000;
    setTimeout(function() {
      console.log(message); // The closure remembers 'message' and the time after which the message will be printed
    }, timeset);
  }
  
  delayedMessage(); // "Hello after 2 seconds!" (printed after 2 seconds)
  