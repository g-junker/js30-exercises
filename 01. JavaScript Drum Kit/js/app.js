window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    if(!audio) return; // stop the function from running in case there's no audio for the corresponding key
    audio.currentTime = 0; // rewind the audio file to the start
    audio.play();

    const key = document.querySelector(`.key[data-key=${e.code}]`);
    key.classList.add('key-pressed');
    setTimeout(() => key.classList.remove('key-pressed'), 150);
})