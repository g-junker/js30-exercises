const inputText = document.querySelector('#input-text');
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map(function(plate, i) {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>  
        </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);


// addItems.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newPlate = document.createElement('li');
//     newPlate.innerHTML = `
//         <input type="checkbox">
//         <label>${inputText.value}</label>    
//     `
//     plates.appendChild(newPlate);
//     inputText.value = '';
// })