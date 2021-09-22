'use strict';
//создание копий

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

//передает не саму структуру объекта, а ссылку (передача по ссылке). Новички часто ошибаются
// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);


//1 способ
//поверхностная копия объекта, тк в следующем уровне (x 7 y 4) все равно будет ссылка
// //начало
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);
//конец


//2 способ
//соединение объектов
const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));

//поверхностная копия
const clone = Object.assign({}, numbers);

clone.c.x = 30; //меняется в клоне и оригинале
clone.a = 11; //меняется только в клоне - поверхностная копия

// console.log(numbers);
// console.log(clone);

//3 способ создание поверхностной окпии
const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray; // это только ссылка
const newArray = oldArray.slice(); // копия

newArray[1] = 'asdasdasd';

console.log(oldArray);
console.log(newArray);



//оператор разворота (от "свернуть-развернуть")
const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'lifejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook']; //

console.log(internet);

//еще пример оператора разворота
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]; 
//допустим выше массив пришел с сервера 
//- ссылка на источник //- источник на заглушку //- ссылка на автора
log(...num);



//4 способ создания поверхностной копии
//массив
const array = [1, 5, 3, 2, 8];
const newAarray = [...array]; 

newAarray[0] = 10;

console.log(array);
console.log(newAarray);

//объект
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};

newObj.one = 10;
console.log(q);
console.log(newObj); 
