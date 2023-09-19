"use strict";

/*  Задание 1

    Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();

request.onload = function() {
    if (request.status !== 200) {
        console.log(`Error ${request.status}: ${request.statusText}`);
    } else {
        console.log(`Users: ${request.response}`);
    }
}

request.abort();