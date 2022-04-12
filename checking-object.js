function checking(amount) {
    this.balance = amount;       //property
    this.deposit = deposit;     //function
    this.withdraw = withdraw;   //function
    this.toString = this.toString //function
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        print("Not enough balance!");
    }
}

function toString() {
    return "Balance: " + this.balance;
}