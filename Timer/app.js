// var msecCounter = 0;
// var secCounter = 0;
// var minCounter = 0;

// var min = document.getElementById("min");
// var sec = document.getElementById("sec");
// var msec = document.getElementById("msec");

// var interval;
// var startButton = document.getElementById("startBtn");
// var stopButton = document.getElementById("stopBtn");
// var resetButton = document.getElementById("resetBtn");

// function timer() {
//     msecCounter++;
//     msec.innerHTML = pad(msecCounter, 2);

//     if (msecCounter === 100) {
//         secCounter++;
//         sec.innerHTML = pad(secCounter, 2);
//         msecCounter = 0;

//         if (secCounter === 5) {
//             secCounter = 0;
//             minCounter++;
//             min.innerHTML = pad(minCounter, 2);
//         }
//     }
// }

// function startTimer() {
//     interval = setInterval(timer, 10);
//     toggleButtons(true, false, true);
// }

// function stopTimer() {
//     clearInterval(interval);
//     toggleButtons(false, true, true);
// }

// function resetTimer() {
//     clearInterval(interval);
//     min.innerHTML = "00";
//     sec.innerHTML = "00";
//     msec.innerHTML = "00";
//     secCounter = 0;
//     minCounter = 0;
//     msecCounter = 0;
//     toggleButtons(true, false, false);
// }

// function toggleButtons(start, stop, reset) {
//     startButton.disabled = start;
//     stopButton.disabled = stop;
//     resetButton.disabled = reset;
// }

// function pad(num, size) {
//     return ('00' + num).slice(-size);
// }
var msecCounter = 0;
var secCounter = 0;
var minCounter = 0;
var hourCounter = 0;
var dayCounter = 0;

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");

var interval;
var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var resetButton = document.getElementById("resetBtn");

function timer() {
    msecCounter++;
    msec.innerHTML = pad(msecCounter, 2);

    if (msecCounter === 100) {
        secCounter++;
        sec.innerHTML = pad(secCounter, 2);
        msecCounter = 0;

        if (secCounter === 60) {
            minCounter++;
            min.innerHTML = pad(minCounter, 2);
            secCounter = 0;

            if (minCounter === 60) {
                hourCounter++;
                hours.innerHTML = pad(hourCounter, 2);
                minCounter = 0;

                if (hourCounter === 24) {
                    dayCounter++;
                    days.innerHTML = pad(dayCounter, 2);
                    hourCounter = 0;
                }
            }
        }
    }
}

function startTimer() {
    interval = setInterval(timer, 10);
    toggleButtons(true, false, true);
}

function stopTimer() {
    clearInterval(interval);
    toggleButtons(false, true, true);
}

// function resetTimer() {
//     clearInterval(interval);
//     days.innerHTML = "00";
//     hours.innerHTML = "00";
//     min.innerHTML = "00";
//     sec.innerHTML = "00";
//     msec.innerHTML = "00";
//     dayCounter = 0;
//     hourCounter = 0;
//     minCounter = 0;
//     secCounter = 0;
//     msecCounter = 0;
//     toggleButtons(true, false, false);
// }

function resetTimer() {
    clearInterval(interval);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    dayCounter = 0;
    hourCounter = 0;
    minCounter = 0;
    secCounter = 0;
    msecCounter = 0;
    toggleButtons(false, true, false);
}

// function toggleButtons(start, stop, reset) {
//     startButton.disabled = start;
//     stopButton.disabled = stop;
//     resetButton.disabled = reset;
// }
function toggleButtons(start, stop, reset) {
    startButton.disabled = start;
    stopButton.disabled = stop;
    resetButton.disabled = false; // Always enable the reset button
}


function pad(num, size) {
    return ('00' + num).slice(-size);
}
