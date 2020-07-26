const checkboxes = document.querySelectorAll('input');

let lastChecked;

function handleCheck(e) {
    // Add Selected Class
    this.checked ? this.parentElement.classList += ' selected' : this.parentElement.classList = 'item';

    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.parentElement.classList += ' selected';
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));