'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    //let num = 10;
    //console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);


console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

// работает всегда, даже до объявления
function calc (a, b) {
    return ( a + b );
}

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//работает только когда до нее доходит код
const logger = function() {
    console.log('Hello!');
};

logger();

//исп в обработчиках событий
const calc2 = (a, b) => a + b;
const calc3 = (a, b) => { return a + b;};