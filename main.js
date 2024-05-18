#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("\n\tWelcome to Student Management App \n"));
let studentInformation = [];
let condition = true;
while (condition) {
    let nameofstd = await inquirer.prompt([
        {
            name: "Name",
            message: "Enter student name",
            type: "input"
        }
    ]);
    const studentID = Math.floor(10000 + Math.random() * 90000);
    console.log(chalk.red(`student "${nameofstd.Name}" added with ID ${studentID}`));
    let courses = await inquirer.prompt([
        {
            name: "course",
            message: "Enter course",
            type: "list",
            choices: [
                "Graphic designing ",
                "Artificial Intelligence",
                "Web Development",
                "Data Science",
                "Cybersecurity",
                "Game Development",
                "Mobil App Development",
            ]
        }
    ]);
    let addmorecourse = await inquirer.prompt([
        {
            name: "morecourse",
            message: "Want to add any other course?",
            type: "list",
            choices: ["Yes", "No"]
        }
    ]);
    let morecourse;
    if (addmorecourse.morecourse === "Yes") {
        morecourse = await inquirer.prompt([
            {
                name: "newcourse",
                message: "Enter course you like",
                type: "input",
            }
        ]);
        console.log(chalk.green("You added new course!"));
    }
    else {
        console.log(chalk.yellow(` no new course added! `));
    }
    let yourBalance = 15000;
    let balance = await inquirer.prompt({
        name: "Balance",
        message: "Enter what you want",
        type: "list",
        choices: ["ViewBalance", "PayFee"]
    });
    let viewbalance;
    let paymentAmount;
    if (balance.Balance === "ViewBalance") {
        viewbalance = yourBalance;
        console.log(chalk.blue(`Your Balance is "${yourBalance}"`));
        //if pay fee.. 
    }
    else if (balance.Balance === "PayFee") {
        let amountans = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        paymentAmount = amountans.amount;
        if (paymentAmount < yourBalance) {
            yourBalance -= paymentAmount;
            console.log("Your current balance " + yourBalance);
        }
        else if (amountans.amount > yourBalance) {
            console.log(chalk.red("Your payment is unable because your current balance is $ " + yourBalance));
        }
    }
    let addmorestd = await inquirer.prompt({
        name: "newstd",
        message: "Want to add new student?",
        type: "confirm",
        default: false
    });
    condition = addmorestd.newstd;
    if (!condition) {
        console.log(chalk.green("Completed!"));
    }
    console.log("\n Your status! ");
    console.log("*  Name:", nameofstd.Name);
    console.log("*  ID:", studentID);
    console.log("*  Course:", courses.course);
    if (morecourse) {
        console.log("*  Additional course:", morecourse.newcourse);
        if (viewbalance) {
            console.log("*  Your Balance:", viewbalance);
        }
        ;
        if (paymentAmount) {
            console.log("*  Payment Amount:", paymentAmount);
        }
    }
}
