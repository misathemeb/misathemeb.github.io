// DOM elements defining variables
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(function(elem) {
    elem.addEventListener('click', function () {
        party.confetti(this), {
            shapes: ["star", "roundedSquare"],
            count: party.variation.range(20, 200),
            size: party.variation.range(0.25, 1.5),
        }
    })
});

// SHOW TIME
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

// set Am or Pm
    const amPm = hour >= 12 ? "PM" : 'AM';

// 12Hr format
    hour = hour % 12 || 12;

// output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background greeting based on time
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();
    if(hour < 12) {
        //morning
        greeting.textContent = "Good Morning ✨";
    } else if(hour < 18) {
        // afternoon
        greeting.textContent = "Good Afternoon ✨";    
    } else {
        // evening
        greeting.textContent = "Good Evening ✨";
    }
}

function clickEvent() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }



//run
showTime();
setBgGreet();
