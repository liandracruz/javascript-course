'use strict';

 function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);
        // console.log(add(2, 3));
    }
    printAge();

    return age;
 };
 
 const firstName = 'Jonas';
 calcAge(1991);

 //variables
 console.log(me);
//  console.log(job);
//  console.log(year);

 var me = 'Jonas';
 let job = 'teacher';
 const year = 1991;

 //functions
 console.log(addDecl(2, 3));
 console.log(addExpr(2, 3));
 console.log(addArrow(2,3));

 function addDecl(a, b) { //can be used before being declared
    return a + b;
 };

 const addExpr = function(a, b) {
    return a + b;
 };

 const addArrow = (a, b) => a + b;

//example:

if(!numProducts) deleteShoppingCart();

 var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
};

var x = 1;
let y = 2;
const z = 3;
