const timeOutput = document.querySelector('h1');
const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    secondsHand.style.transform = `rotate(${seconds*6 + 90}deg)`; // 60s/360° = 6° per second
    minutesHand.style.transform = `rotate(${minutes*6 + 90}deg)`; // 60min/360° = 6° per minute
    hoursHand.style.transform = `rotate(${hours*30 + 90}deg)`; // 12h/360° = 30° per hour
    timeOutput.innerHTML = `${hours}:${minutes}:${seconds}`;
    console.log(hoursHand.style);
}

setInterval(getTime, 1000); // runs the function getTime() every second
