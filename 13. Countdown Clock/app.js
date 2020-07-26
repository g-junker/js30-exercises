const timeLeft = document.querySelector('#time-left');
const buttons = document.querySelectorAll('button');
const timeEnd = document.querySelector('#time-end');
const input = document.querySelector('input');

let countdown;

function timer(seconds) {
    clearInterval(countdown);
    displayTimeLeft(seconds);
    const now = Date.now();
    const then = now + seconds*1000;

    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000)
     
}

function displayTimeLeft(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;

    const display = `${minutes < 10 ? '0' + minutes : minutes}:${remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds}`;
    timeLeft.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    timeEnd.textContent = `Be back at ${hour}:${minutes < 10 ? '0' + minutes : minutes}`;

}

buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    })
})


input.addEventListener('keydown', function(e){
    if (e.key == 'Enter') {
        e.preventDefault();
        const minutes = parseInt(this.value);
        timer(minutes * 60);
        this.value = '';
    }
})





/* const timeLeft = document.querySelector('#time-left');

const currentTime = document.querySelector('#current-time');



function setCurrentTime(){
    const today = new Date();
    const now = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    currentTime.textContent = now;
    timeEnd.textContent = `Be back at ${today.getHours()}:${today.getMinutes() + 10}`
}


function updateSeconds(){

    let timer = this.dataset.time, minutes, seconds;
    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeLeft.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000)
}    

buttons.forEach(function(btn){
    btn.addEventListener('click', updateSeconds)
})


window.setInterval(setCurrentTime, 1000);

*/