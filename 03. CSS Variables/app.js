/*
const ctrlSpacing = document.querySelector('input[name="spacing"]');
const ctrlBlur = document.querySelector('input[name="blur"]');
const ctrlColor = document.querySelector('input[name="color"]');
const img = document.querySelector('img');
const body = document.querySelector('body');

ctrlSpacing.oninput = function setSpacing(e){
    img.style.borderWidth = `${e.target.value}px`;
}

ctrlBlur.oninput = function setBlur(e){
    img.style.filter = `blur(${e.target.value}px)`
}

ctrlColor.addEventListener('input', function(e){
    body.style.setProperty('--main-color', `${e.target.value}`);
})
*/


const input = document.querySelectorAll('.var-control input');

input.forEach(input => 
    input.addEventListener('input', function(){
        const suffix = (this.type === 'range') ? 'px' : '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    })
)