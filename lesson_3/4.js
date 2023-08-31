"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const firstNum = +prompt('Введите первое число:');
const secondNum = +prompt('Введите второе число:');

const sum = (firstNum, secondNum) => firstNum + secondNum;
const difference = (firstNum, secondNum) => {
    if (firstNum > secondNum) {
        return firstNum - secondNum;
    } 
    return secondNum - firstNum;    
}
const multiple = (firstNum, secondNum) => firstNum * secondNum;
const division = (firstNum, secondNum) => firstNum / secondNum;

console.log(`1. Сумма введенных чисел равна ${sum(firstNum, secondNum)}.
2. Разность введенных чисел равна ${difference(firstNum, secondNum)}.
3. Произведение введенных чисел равно ${multiple(firstNum, secondNum)}.
4. Частное введенных чиселм равно ${division(firstNum, secondNum)}.`)