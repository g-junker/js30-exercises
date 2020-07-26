const panel = document.querySelectorAll('.panel');

panel.forEach(function(item){
    item.addEventListener('click', function(e){
        item.classList += ' open-active';
        e.preventDefault();
    });
});