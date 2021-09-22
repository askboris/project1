'use strict';

// const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

//Деструктуризация объекта
const {border, bg} = options.colors;
console.log(border);

//вывод black 
//console.log(options["colors"]["border"]);

//вывод имени
// console.log(options.name);

//удаление свойства
// delete options.name;
// console.log(options);

//перебор и вывод свойств(ключей) и их значений
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }

//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
//     }
//     //подсчет количества
//     counter++;
// }

// console.log(counter);


//получить массив со всеми ключами
console.log(Object.keys(options));
//получить количество ключей
console.log(Object.keys(options).length);