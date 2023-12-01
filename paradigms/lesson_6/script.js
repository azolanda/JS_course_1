"use strict";
/** Написать программу на любом языке в любой парадигме для
 *  бинарного поиска. 
 *  На вход подаётся целочисленный массив и число. 
 *  На выходе - индекс элемента или -1, в случае если искомого
 *  элемента нет в массиве.
 */

function binarySearch(array, num) {
    let index = 0;
    let counter = 0;
    array.sort((a,b) => a - b);
    console.log(array);
    
    while(counter <= array.length) {
        if(array[index] === num) {
            console.log(index);
            return index;
        } else if(array[index] > num) {
            index = Math.round(index / 2);
        } else {
            index+= Math.round((array.length - index)/ 2);
        }
        
        if(counter === 0) {
            index = Math.round(array.length / 2);
        }
        counter++;        
    }
    console.log(-1);
    return -1;
}

const array = [1,2,5,4,6,8,17,9,11,7];
binarySearch(array, 5);
binarySearch(array, 22);
binarySearch(array, 1);
binarySearch(array, 17);
binarySearch(array, 125);