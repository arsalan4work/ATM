#! /usr/bin/env node
// This is a ATM machine code
import inquirer from "inquirer";
console.log("Welcome Muhammad Arsalan to the Meezan Bank ATM!");
console.log("Enter your PIN Number");
let myBalance = 25000; // Rupees
let mypin = 4433; // My PIN Number
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }]);
// 4433 === 4433 - True
if (pinAnswer.pin === mypin) {
    console.log("Correct Pin Code!");
    // Operation's perform by ATM
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please select the option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fastcash"]
        }]);
    // Withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your current balance is  ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    // Check Balance
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is  ${myBalance}`);
    }
    // Fast Cash
    else if (operationAns.operation === "Fastcash") {
        let fastAns = await inquirer.prompt([{
                name: "fast_opt",
                message: "How much money you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }]);
        if (fastAns.fast_opt === "1000") {
            myBalance -= fastAns.fast_opt;
            console.log(`Your remaining balance is now ${myBalance}`);
        }
        if (fastAns.fast_opt === "2000") {
            myBalance -= fastAns.fast_opt;
            console.log(`Your remaining balance is now ${myBalance}`);
        }
        if (fastAns.fast_opt === "5000") {
            myBalance -= fastAns.fast_opt;
            console.log(`Your remaining balance is now ${myBalance}`);
        }
        if (fastAns.fast_opt === "10000") {
            myBalance -= fastAns.fast_opt;
            console.log(`Your remaining balance is now ${myBalance}`);
        }
    }
}
else {
    console.log("Invalid Pin Number");
}
console.log("Thank you for using Meezan Bank ATM");
