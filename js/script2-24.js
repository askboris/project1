'use strict';

console.log(typeof([ ] + false - null));

let y = 1,
    x = y = 2; 
    
console.log(x);


let a = [], b = 1, c = 2;
console.log(a + b + c);


console.log( "1"[0] );

console.log(2 && 1 && null && 0 && undefined );
// И запинается на лжи

console.log(!!( 1 && 2 ) === (1 && 2)); //!! возвращается boolean значение, 
//которое не равняется значению выражения 1 && 2

                    // 3
console.log( null || 2 && 3 || 4 ); //по таблице приоритетов операторов сначала работает & 
//если сравнивается & два числа, то возвращается последнее число  -> 3
                // 3
console.log( null || 3 || 4 ); //ИЛИ запинается на правде. null - это неправда -> 3
console.log( 3 || 4 ); //ИЛИ запинается на правде, поэтому тк первый аргумент правда, возвращается -> 3


let q = [1, 2, 3], w =[1, 2, 3]; // два хранилища информации, 
//где одинаковые составные, но это два разных массива, которые просто идентичны
if ( q == w ) {
    console.log('true');
} else {
    console.log('false'); //false
}


console.log( +"Infinity" ); 

if ('Ежик' > 'яблоко' ) {
    console.log('true');
} else {
    console.log('false'); //посимвольное сравнение, е-я   ж-б   и-л   к-о  ""-к  ""о
}

let l = 5;
console.log( ++l );

//         false  false true  - ИЛИ запинается на правде -> 2 а дальше код не пойдет
console.log(0 || "" || 2 || undefined || true || falsе);