#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*6+1);
const answers = await inquirer.prompt([{
    name: "userRandomnumber",
    type: "number",
    message: `${chalk.red.bold("Please select a number between 1-6")}`
}])
if(answers.userRandomnumber === randomNumber){
    console.log(`${chalk.green.bold("congartulation your number is correct")}`);
}else{
    console.log(`${chalk.cyan.bold("op's your number is wromng")}`);
}