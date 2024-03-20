#!/usr/bin/env Node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  {
    message: chalk.bgBlueBright("Enter your first Number"),
    type: "number",
    name: "firstNum",
  },
  {
    message: chalk.bgBlueBright("Enter your second number"),
    type: "number",
    name: "secondNum",
  },
  {
    message: "Dear, select one of the opretor to perform action",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponention",
    ],
  },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNum + answer.secondNum);
  } else if (answer.operator === "Subtraction") {
    console.log(answer.firstNum - answer.secondNum);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNum * answer.secondNum);
  } else if (answer.operator === "Division") {
    console.log(answer.firstNum / answer.secondNum);
  } else if (answer.operator === "Modulus") {
    console.log(answer.firstNum % answer.secondNum);
  } else if (answer.operator === "Exponentiation") {
    console.log(answer.firstNum ** answer.secondNum);
  } else {
    console.log("Please select a correct operator.");
  }
