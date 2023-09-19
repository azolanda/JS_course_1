"use strict";

/*  Задание 1

    Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.responseType = 'json';
request.send();

request.onload = function() {
    if (request.status != 200) {
        console.log(`Error ${request.status}: ${request.statusText}`);
    } else {
        const receivedData = request.response;
        console.log(receivedData);

        for(let i = 0; i < receivedData.length; i++) {
            const dataItem = JSON.stringify(receivedData[i]);
            localStorage.setItem(i, dataItem);
            const div = document.createElement('div');
            const paragraph = document.createElement('p');
            const button = document.createElement('button');
            button.innerHTML = "Delete";
            button.setAttribute('data-id', i);
            button.onclick = function() {
                button.parentElement.remove();
                localStorage.removeItem(button.dataset.id);
            };
            paragraph.textContent+= dataItem;
            div.append(paragraph);
            div.append(button);
            document.body.append(div);
        }
    }
};

request.onprogress = function(event) {
    if (event.lengthComputable) {
        console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
        console.log(`Получено ${event.loaded} байт`);
    }
};

request.onerror = function() {
    console.log('Запрос не удался');
};