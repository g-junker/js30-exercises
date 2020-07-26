const header = document.querySelector('.header');
const title = document.querySelector('h1');
const walk = 50;

document.addEventListener('mousemove', function(e){

    const width = header.offsetWidth;
    const height = header.offsetHeight;
    let {offsetX: x, offsetY: y} = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    
    console.log(xWalk, yWalk)

    title.style.textShadow = `${xWalk}px ${yWalk}px rgb(0, 0, 0, 0.15)`
})