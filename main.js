// Start Progress Function
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        spans.forEach( (span) => {
            span.style.width = span.dataset.width;
        });
    };
    if (window.scrollY >= statsSection.offsetTop){
        if(!started)
            number.forEach((num) => startCount(num));
        started = true;
    };
};
// End Progress Function

// Start Stats Function
let statsSection = document.querySelector(".stats");
let number = document.querySelectorAll(".stats .number");
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval( () => {
        el.textContent++
        if(el.textContent == goal)
            clearInterval(count);
    },2000/goal);
};

// End Stats Function

// Start Timer Function
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

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
// End Timer Function