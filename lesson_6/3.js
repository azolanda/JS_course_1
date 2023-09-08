"use strict";

/* Напишем функцию, которая будет находить факториал числа с использованием рекурсии */

const factorial = (num) => {
    if (num < 0) {
        return "Факториал отрицательного числа не существует";
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return factorial(num - 1) * num;
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(-1));