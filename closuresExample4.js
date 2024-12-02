function createBankAccount() {
    var balance = 0; // private variable
    
    return {
      deposit: function(amount) {
        balance += amount; // accessing 'balance' through closure
      },
      withdraw: function(amount) {
        balance -= amount; // accessing 'balance' through closure
      },
      getBalance: function() {
        return balance; // accessing 'balance' through closure
      }
    };
  }
  
  var myAccount = createBankAccount();
  console.log(myAccount.getBalance()); // 0
  myAccount.deposit(1000);
  console.log(myAccount.getBalance()); // 1000
  myAccount.withdraw(250);
  console.log(myAccount.getBalance()); // 750
  