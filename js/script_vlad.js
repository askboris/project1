'use strict';

// Массив товаров
// const products = [
//     { id: 1, title: "Product 1", price: 40, stock: 5 },
//     { id: 2, title: "Product 2", price: 20, stock: 0 },
//     { id: 3, title: "Product 3", price: 30, stock: 1 },
// ];


//  Написать функцию, которая возвращает товары в наличии, те у которых stock > 0 
function forwardProducts() {
    let productsCopy = [], i = 0;
    for (let key in products) {
      if ( products[key].stock > 0 ) {
        productsCopy[i] = products[key];
        i++;
      }
    }
    return productsCopy;
}
  
let productsCopy = forwardProducts();

//вывод всех товаров
products.forEach(function(item, i, products) {
    console.log(products[i]);
});
//вывод доступных товаров
productsCopy.forEach(function(item, i, productsCopy) {
    console.log(productsCopy[i]);
});





// Написать функцию, которая добавляет товар со следующим порядковым номером
function addProduct(id, title, price, stock) {
    
    title = prompt(`Введите название товара`, '');
    price = +prompt(`Укажите цену товара`, '');
    stock = +prompt(`Укажите количество в наличии`, '');
    id = products[products.length - 1].id + 1;

    products.push({id, title, price, stock});
}

addProduct();

//вывод всех товаров
products.forEach(function(item, i, products) {
    console.log(products[i]);
});


const products = [
    { id: 1, title: "Product 1", price: 40, stock: 5 },
    { id: 2, title: "Product 2", price: 20, stock: 0 },
    { id: 3, title: "Product 3", price: 30, stock: 1 },
];

// Функция добавляет новое поле discount со значением 0 во все товары и возвращает их
function newProp(prop) {
    for (let key in products) {
        products[key].prop = 0;
      }
      return products;
}

newProp('discount');

//вывод всех товаров
products.forEach(function(item, i, products) {
    console.log(products[i]);
});




// сверстать такой вот хедер [search-----logo---phone-cart] где лого всегда по центру
//и всё это в онлайне без обращения к справочникам