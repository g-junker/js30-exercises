const checkboxes = document.querySelectorAll('input');
const item = document.querySelectorAll('.item');
const itemArr = Array.from(item);

let firstChecked = '';
let lastChecked = '';

function handleCheck(e) {
    // Add Selected Class
    this.checked ? this.parentElement.classList += ' selected' : this.parentElement.classList = 'item';

    // Set first and last checked elements
    if (!firstChecked && !lastChecked) {
        firstChecked = this.parentElement;
    } else if (!lastChecked) {
        lastChecked = this.parentElement;
    } else if (firstChecked) {
        firstChecked = this.parentElement;
        lastChecked = '';
    }

    // Set Shift function
    window.addEventListener('keydown', function(e){
        
        let selectedItems;
        let firstIndex = itemArr.indexOf(firstChecked);
        let lastIndex = itemArr.indexOf(lastChecked);

        if (firstIndex < lastIndex) {
            selectedItems = itemArr.slice(firstIndex, lastIndex+1);
        } else {
            selectedItems = itemArr.slice(lastIndex, firstIndex+1)
        }

        if (e.shiftKey) {
            selectedItems.forEach(function(el){
                el.classList += ' selected';
                el.firstElementChild.checked = true;
            })
        }
    })
}

checkboxes.forEach(function(checkbox){
    checkbox.addEventListener('change', handleCheck);
})