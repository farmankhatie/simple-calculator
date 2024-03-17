import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.bgBlueBright("Enter your first Number"), type: "number", name: "firstNum" },
    { message: chalk.bgBlueBright("Enter your second number"), type: "number", name: "secondNum" },
    {
        message: "Dear, select one of the opretor to perform action",
        type: "list",
        name: "operator",
        choices: [
            chalk.bgWhiteBright("addition"),
            chalk.bgWhiteBright("substraction"),
            chalk.bgWhiteBright("multiplication"),
            chalk.bgWhiteBright("division"),
            chalk.bgWhiteBright("modulus"),
            chalk.bgWhiteBright("exponation"),
        ],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(+answer.firstNum + answer.secondNum);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "division") {
    console.log(answer.firstNum / answer.secondNum);
}
else if (answer.operator === "modulus") {
    console.log(answer.firstNum % answer.secondNum);
}
else if (answer.operator === "exponation") {
    console.log(answer.firstNum ** answer.secondNum);
}
else {
    console.log("Barae Meharbani Durust cheez ka intkhab kijiye!!");
}
