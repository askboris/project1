'use strict';

const arr = [14, 22, 3, 6, 8];
arr.sort(compareNum);
//сортировка все равно как строчные симфолы сначала начинаются на 1 потом на 2 и тд те
//11  12  100 и тд
console.log(arr);
//сортировка как Numbers
function compareNum(a, b) {
    return a - b;
}


// //свойство length = последний индекс + 1
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//перебор массива во всех задачах перебора. Не можем использовать break и continue
//item = конкретный элемент, i порядковый номер элемента, arr ссылка на массив, который перебираем
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
//методы трасформации arr.map arr.every/some, arr.filter, arr.reduce
//метод перебора arr.forEach

// //удаление последнего элемента
// arr.pop();
// console.log(arr);

// //добавление элемента в конец
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//перебор элементов массива, можно использовать break  и continue
// for (let value of arr) {
//     console.log(value);
// }


// //на основании разделителя создать массив
// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products);
// //сортировка массива как строки
// products.sort();
// //на основании массива вывести в строку все элементы
// console.log(products.join('; '));