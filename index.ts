#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()*6+1);
const answers = await inquirer.prompt([{
    name: "userRandomnumber",
    type: "number",
    message: "Please select a number between 1-6"
}])
if(answers.userRandomnumber === randomNumber){
    console.log("congartulation your number is correct");
}else{
    console.log("op's your number is wromng");
}