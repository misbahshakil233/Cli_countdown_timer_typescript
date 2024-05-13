#! usr/bin/env node

import { differenceInSeconds } from 'date-fns'
import inquirer from 'inquirer'

const res = await inquirer.prompt({
    name:"userInput",
    message:"Plese Enter Your the amount seconds",
    type:"number",
    validate:(input)=>{
        if(isNaN(input)){
            return "Please enter Valid number"
        }
        else if(input>60){
            return "plese enter must be in 60"
        }
        else {
            return true
        }

    }
})

let input = res.userInput
function startTime(val:number){
    const iniTime=new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime=new Date(iniTime)
    setInterval((()=>{
        const currentTime=new Date()
        const timeDiff=differenceInSeconds(intervalTime,currentTime)
        if(timeDiff<=0){
            console.log("Timre has Expired")
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600)
        const sec = Math.floor(timeDiff %  60)
        console.log(`${min.toString().padStart(2 , "0")}:${sec.toString().padStart(2 , "0")}`)
    }),1000)
}
startTime(input);
