"use strict";

// 1) Императивный стиль
function sortListImperative(numbers) {
    for(let i = 1; i < numbers.length; i++) {
        const temp = numbers[i];
        for(let j = i - 1; j >= 0; j--) {
            if(temp < numbers[j]) {
                numbers[j + 1] = numbers[j];
                if(j === 0) {
                    numbers[j] = temp;
                }
            } else if(i > j + 1) {
                numbers[j + 1] = temp;
                break;
            } else {
                break;
            }
        }
    }

    return numbers;
}
const array = [-2, 8, -1, 6, 12, 2, 9, 2, 0];
console.log(array);
sortListImperative(array);
console.log(array);

// 2) Декларативный стиль
function sortListDeclarative(numbers) {
    return numbers.sort((a, b) => a - b);
}

const arraySecond = [-7, 18, 5, 3, 15, 6, 2, 19, 72, 10];
console.log(arraySecond);
sortListDeclarative(arraySecond);
console.log(arraySecond);
