'use strict';

//СТРОКИ
const str = 'test',
    str2 = 'TEST2';
console.log(str.length);

const arr = [1, 2, 4];
console.log(arr.length);

// console.log(str[2]);
console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));


const logg = 'Hello world';
//одинаково отрезают до конца
console.log(logg.slice(6, logg.length));
console.log(logg.slice(6));
//с правой стороный
console.log(logg.slice(-6, -1));

console.log(logg.substring(6, 11));
//второе число - сколько символов необходимо вырезать
console.log(logg.substr(6, 5));


//ЧИСЛА

//округление
const num = 12.2;
console.log(Math.round(num));

//перевод в систему исчисления
const test = "12.2px";
console.log(parseInt(test, 10));
//возвращает дробное значение
console.log(parseFloat(test));