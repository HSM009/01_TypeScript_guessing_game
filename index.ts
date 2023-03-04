#! /usr/bin/env node
 console.clear();

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const stopTime = ()=>{
    return new Promise((res:any)=>{
        setTimeout(res,3500);
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Let's play Number Guessing Game!\n\nCoded By Hosein Sirat Mohammad\n");
    await stopTime();
    rainbowTitle.stop();
}

await welcome();

async function ask(){
let val = Math.floor(Math.random()*10)+ 1;
    await inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type : "number",
            name : "num",
            message : "Guess the number between 1-10?",
            validate : function(value) {
                if(Number.isInteger(value))
                {
                    if (value > 10)
                    {
                        return "Must input numbers between 1 - 10.";
                    }
                    else
                    {
                        return true;
                    }
                }
                else 
                {
                    return "Incorrect Input. Must type number.";
                }                    
            ;},
        }
    ])
    .then((answers) => {
        if( val == answers.num)
        {
            console.log("You have guessed correct number.");
        }
        else
        {
            console.log("You failed. Correct number is "+val +". Try again later.");
        }
    })
    ;
}



do{
    await ask();
    var re = await inquirer.prompt (
        [
            {
                type : "input",
                name : "restart",
                message : "Do you like to restart program? Y/N",
                default : "Y"
            }
        ]
    )
;

}while((re.restart == 'Y' || re.restart == 'y'))


// let a:number ;
//  a = Math.floor(Math.random()*10)+ 1;
//  console.log(a);

