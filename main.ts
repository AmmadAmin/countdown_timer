

// start coding
import { log } from "console";
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

// funtion for countDonw Timer
function* countDownTimer(second: number) {
    // while loop
    while (second > 0) {
        yield second;
        second--;
    }
}

// counter initialization
let timerIterator = countDownTimer(20)

// creat a count DownTimer 
function displayCountdown() {
    // value belo w 20

    let result = timerIterator.next();

    // if and else statement 
    if (!result.done) {

        const now = new Date();
        // calculate  minutes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000))
        const reiminigSeconds = differenceInSeconds(countdownTime, now)
        console.log(`Reimaining Second ${reiminigSeconds}`);

        setTimeout(displayCountdown, 1000)

    } else {
        //display resilt count down complete
        console.log("CountDown Complete");




    }

}

// invoke
displayCountdown();

