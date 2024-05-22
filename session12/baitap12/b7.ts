class Account {
    protected accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    }
    withdraw(amount: number){
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}.`);
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        const monthlyInterest = this.balance * (this.interestRate / 100);
        return monthlyInterest;
    }
}
// Tạo một tài khoản tiết kiệm
const savingsAcc = new SavingsAccount("123456789", 1000, 0.05);
// In ra tiền lãi hàng tháng ban đầu
console.log(`Monthly interest: ${savingsAcc.calculateInterest()}`);
// Gửi thêm tiền vào tài khoản
savingsAcc.deposit(500);
// In lại tiền lãi hàng tháng sau khi gửi thêm tiền
console.log(`Monthly interest after deposit: ${savingsAcc.calculateInterest()}`);
