'use strict';

const num = '49';

// (num === 50) ? console.log('ok!') : console.log('no!');

switch (num) {
    case '49': 
        console.log('less!');
        break;
    case '50': 
        console.log('equal!');
        break;
    case '51': 
        console.log('bigger!');
        break;
    default: 
        console.log('no data!'); 
}