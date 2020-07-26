const uri = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(uri)
    .then(response => response.json())
    .then(data => cities.push(...data)); // with the spread operator, every time i have another argument (,) to push, it's gonna put as its own item in the array.

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi') // flags: g(global, find all matches rather than stopping after the first match); i(ignore case, case insensitive)
        return place.city.match(regex) || place.state.match(regex);
    })
}

search.addEventListener('input', displayMatches)

function displayMatches() {
    if (this.value == '') {
        suggestions.innerHTML = '';
    } else {
        const matchArray = findMatches(this.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, (match) => `<span class="hl">${match}</span>`);
            const stateName = place.state.replace(regex, (match) => `<span class="hl">${match}</span>`);
            return `
            <li>${cityName}, ${stateName} <span class="population">${Number(place.population).toLocaleString()}</span></li>
            `
        }).join('');
        suggestions.innerHTML = html;
    }
}
