#! /usr/bin/env node
console.clear();
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const stopTime = () => {
    return new Promise((res) => {
        setTimeout(res, 3500);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(chalk.cyan("Let's play Number Guessing Game!\n\nCoded By Hosein Sirat Mohammad\n"));
    await stopTime();
    rainbowTitle.stop();
}
await welcome();
async function ask() {
    let val = Math.floor(Math.random() * 10) + 1;
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "num",
            message: "Guess the number between 1-10?",
            validate: function (value) {
                if (!isNaN(value)) {
                    if (value > 10) {
                        return chalk.bgRedBright("Must input numbers between 1 - 10.");
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return chalk.bgRedBright("Incorrect Input. Must type number.");
                }
                ;
            },
        }
    ])
        .then((answers) => {
        if (val == answers.num) {
            console.log(chalk.greenBright("You have guessed correct number."));
        }
        else {
            console.log(chalk.redBright("You failed. Correct number is " + val + ". Try again later."));
        }
    });
}
do {
    await ask();
    var re = await inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "\nDo you like to restart program?",
        }
    ]);
} while (re.restart == true);
