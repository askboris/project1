'use strict';

// to string

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(5)));

// 2)
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num); //передаем строку

const funtSize = 26 + 'px';


// to number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

// practic
const answ = +prompt('Hello', '');
//все что получаем от пользователя - всегда будет строка
//иногда нам необходимо преобразовывать эти строки в числа

// to boolean

// 0, '', null, undefined, Nan; - всегда превращается в false

// 1) классический прием
let switcher = null;

if (!switcher) {
    console.log('Not working..');
}

switcher = 1;

if (switcher) {
    console.log('Working..');
}

// 2) очень редкий прием
console.log(typeof(Boolean('4'))); 

// 3) редкий прием
console.log(typeof(!!('4444'))); 