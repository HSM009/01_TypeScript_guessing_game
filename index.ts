#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const stopTime = ()=>{
    return new Promise((res:any)=>{
        setTimeout(res,3500);
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Let's play Number Guessing Game!\n\nCoded By Hosein Sirat Mohammad");
    await stopTime();
    rainbowTitle.stop();
}

await welcome();

async function ask(){
 await inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type : "input",
            name : "name",
            message : "what is your name?"
        }
    ])
    .then((answers) => {
        let a:string = answers.name;
        console.log ("Welcome Sir/Madam " +   a.toLocaleUpperCase() );
    })
    ;
}

ask();
