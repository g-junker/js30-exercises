const images = document.querySelectorAll('img');

window.addEventListener('scroll', function(){
    images.forEach(function(img){
        if ((window.scrollY + window.innerHeight) >= img.offsetTop) {
            if(!img.classList.contains('active')) {
                img.classList.add('active');
            }
        }
    })
})