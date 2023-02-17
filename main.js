let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

console.log(days);
// CountDownDate In MilliSeconds
let countDownDate = new Date("Mar 22, 2023 23:59:59").getTime();

// interval to Count Down
let count = setInterval (() => {
    // Get Date Now
    let dateNow = new Date().getTime();
    // Find Diff. Between CountDownDate And DateNow
    let dateDiff = countDownDate - dateNow;
    // get Time Units
    days.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    seconds.innerHTML = Math.floor(dateDiff % (1000 * 60) / (1000));
    if(seconds.innerHTML < 10)
        seconds.innerHTML = `0${seconds.innerHTML}`
    if(minutes.innerHTML < 10)
        minutes.innerHTML = `0${minutes.innerHTML}`
    if(hours.innerHTML < 10)
        hours.innerHTML = `0${hours.innerHTML}`
    if(days.innerHTML < 10)
        days.innerHTML = `0${days.innerHTML}`
    if(dateDiff >= 0)
        clearInterval();
}, 1000);