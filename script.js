const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//Set background year
year.innerText = currentYear + 1;

//Update the countdown time
function updateCountDown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    console.log(newYearTime);
    console.log(currentTime);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    console.log(`This is the number of days left: ${d}`);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    console.log(`This is the number of hours left: ${h}`);
    console.log(`This is the number of hours left: ${1981/24}`);
    console.log(`This is the number of hours left: ${24 * 0.54166666666667}`);
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    //Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

//36 => 1 day and 12 hours => 24 + 12

//1981 hours/24 82

//3 days seconds = 3 * 24 => 72 * 60 * 60 ...1000 


//Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

//Run this every second
setInterval(updateCountDown, 1000);