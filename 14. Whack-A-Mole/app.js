const start = document.querySelector('button');
const moles = document.querySelectorAll('.mole');
const score = document.querySelector('.score');

let points = 0;
let lastHole;
let timeOut = false;

// select all holes / each hole has an index number / with math.random we can then select each index
function displayRandomHole(){
    const index = Math.round(Math.random() * 5);
    const time = Math.round(Math.random() * (1000 - 200) + 200);
    if(index === lastHole) {
        return displayRandomHole();
    }

    moles[index].style.transform = 'translateY(0)';
    setTimeout(() => {
        moles[index].style.transform = 'translateY(100%)';
        if (!timeOut) displayRandomHole();
    }, time);
    
    lastHole = index;
    return index;
}

function startGame(){
    points = 0;
    score.textContent = points;
    timeOut = false;
    displayRandomHole();
    setTimeout(() => timeOut = true, 10000)
}

function updatePoints(){
    points++;
    score.textContent = points;
    this.style.transform = 'translateY(100%)';
}

start.addEventListener('click', startGame)
moles.forEach((mole) => {mole.addEventListener('click', updatePoints)})