"use strict";

// На вход подается число n.
// Написать скрипт в любой парадигме, который выводит на экран таблицу умножения всех чисел от 1 до n.
// Обоснуйте выбор парадигм.

function multiplyTable(n) {
    let count = 1;
    while(count <= n) {
        let result = 0;
        for(let i = 1; i < 10; i++) {
            result+= count;
            console.log(`${count} * ${i} = ${result}`);
        }
        console.log(`---------------------------`);
        count++;
    }
}

multiplyTable(5);

/** Использованы:
 *  - императивная парадигма, код написан пошагово, на уровне манипуляций с 
 *  конкретными переменными;
 *  - структурная парадигма, алгоритм реализован с помощью управляющих 
 *  конструкций, без использования оператора goto;
 *  - процедурная парадигма, что обеспечивает возможность повторного 
 *  использования кода.
 */ 