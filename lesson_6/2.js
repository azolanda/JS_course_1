"use strict";

/* Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

const createCounter = () => {
    let counter = 0;
    return {
        increment: function () {
            return ++counter;
        },
        decrement: function () {
            return --counter;
        },
        getCounter: function () {
            return counter;
        }
    }
}

const newCounter = createCounter();

console.log(`Получаем значение счетчика: ${newCounter.getCounter()}`);
console.log(`Увеличим значение счетчика на 1: ${newCounter.increment()}`);
console.log(`Увеличим значение счетчика на 1: ${newCounter.increment()}`);
console.log(`Увеличим значение счетчика на 1: ${newCounter.increment()}`);
console.log(`Получаем значение счетчика: ${newCounter.getCounter()}`);
console.log(`Уменьшим значение счетчика на 1: ${newCounter.decrement()}`);
console.log(`Получаем значение счетчика: ${newCounter.getCounter()}`);