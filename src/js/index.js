import '../scss/main.scss';
import moment from 'moment';
/* place your code below */

console.log('HELLO 🚀')
const name='Karo';
const age=19;

console.log(
    `nazywam się ${name} i mam ${age} lat.`)
const startOfDay= moment().startOf('day').fromNow();
const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;


console.log(startOfDay)