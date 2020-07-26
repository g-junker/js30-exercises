
let sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
let newSequence = [];



window.addEventListener('keyup', function(e){
    newSequence.push(e.code);
    newSequence.splice(0, newSequence.length - sequence.length);
    if(newSequence.join('').includes(sequence.join(''))) {
        cornify_add();
    }
    console.log(newSequence);
})





// window.addEventListener('keydown', function(e) {    
//     if(newSequence == '' && e.code == 'ArrowUp') {newSequence.push('ArrowUp')}
//     if(sequence[0] == 'ArrowUp' && e.code == 'ArrowUp') {newSequence.push('ArrowUp')}
//     if(sequence[1] == 'ArrowUp' && e.code == 'ArrowDown') {newSequence.push('ArrowDown')}
//     if(sequence[2] == 'ArrowDown' && e.code == 'ArrowDown') {newSequence.push('ArrowDown')}
//     if(sequence[3] == 'ArrowDown' && e.code == 'ArrowLeft') {newSequence.push('ArrowLeft')}
//     if(sequence[4] == 'ArrowLeft' && e.code == 'ArrowRight') {newSequence.push('ArrowRight')}
//     if(sequence[5] == 'ArrowRight' && e.code == 'ArrowLeft') {newSequence.push('ArrowLeft')}
//     if(sequence[6] == 'ArrowLeft' && e.code == 'ArrowRight') {newSequence.push('ArrowRight')}
//     if(sequence[7] == 'ArrowRight' && e.code == 'KeyB') {newSequence.push('KeyB')}
//     if(sequence[8] == 'KeyB' && e.code == 'KeyA') {newSequence.push('KeyA')}
//     if(sequence[9] == 'KeyA' && e.code == 'Enter') {newSequence.push('Enter')}
//     if(sequence.every( e => newSequence.includes(e) )) {console.log('yes'); newSequence = [];}
//     }
// )

