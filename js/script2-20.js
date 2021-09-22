'use strict';

// let str = 'some';
// let strObj = new String(str); //метод оборачивания строки в 
// //объъект и присваивание этого объекта в strObj

// // console.log(typeof(str));
// console.log(typeof(strObj));

//console.dir([1, 2, 3]); 

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    }
};


//установим связь между джоном и солдатом 
//старая запись #1 позиция
// const john = {
//     health: 100
// };

//установили прототипом proto -> soldier (устаревший код) #2
//john.__proto__ = soldier; 
//новая форма записи. Связываем Прототип от джона к солдату (но длиннее по времени чем #1)
//Object.setPrototypeOf(john, soldier);

//новая форма записи #3
const john = Object.create(soldier);

//console.log(john.armor); //теперь у джона armor 100
john.sayHello(); //теперь джон умеет говорить hello