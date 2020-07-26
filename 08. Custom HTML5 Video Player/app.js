const container = document.querySelector('.container');
const video = document.querySelector('video');
const progressBar = document.querySelector('.progress');
const progressBarFilled = document.querySelector('.progress-filled');
const playBtn = document.querySelector('.play-btn');
const volumeCtrl = document.querySelector('#volume');
const playbackRateCtrl = document.querySelector('#playbackRate');
const backBtn = document.querySelector('.back-btn');
const forwBtn = document.querySelector('.forw-btn');

function playVideo() {
    if(video.paused) {
        video.play()
        .then(playBtn.innerHTML= '<i class="fas fa-pause"></i>')
        .catch(err => console.log(err));
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }    
}



video.addEventListener('click', playVideo);
playBtn.addEventListener('click', playVideo);
window.addEventListener('keypress', (e) => {if(e.code == 'Space') {playVideo()}})
volumeCtrl.addEventListener('input', () => video.volume = (volumeCtrl.value / 100))
playbackRateCtrl.addEventListener('input', () => video.playbackRate = (playbackRateCtrl.value))
forwBtn.addEventListener('click', () => video.currentTime += 25)
backBtn.addEventListener('click', () => video.currentTime -= 10)

video.addEventListener('timeupdate', function(){
    progressBarFilled.style.width = `${(video.currentTime / video.duration)*100}%`
    // progressBarFilled.style.transform = `scaleX(${(video.currentTime / video.duration)})`
})

progressBar.addEventListener('click', function(e){
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
})