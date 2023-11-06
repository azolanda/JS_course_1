"use strict";

function formatDateNumbers(dateNumber) {
    if (dateNumber < 10) {
        return "0" + dateNumber;
    } else {
        return dateNumber;
    }
}

function uploadDataOnSite(data) {
    if (data) {
        const lessons__container = document.querySelector(".lessons__container");

        for (const dataItem of data) {
            let date = new Date(Date.parse(dataItem.time_start));
            lessons__container.insertAdjacentHTML("beforeend",
                `<div class = "lessons__item">
                    <h4>${dataItem.name}</h4>
                    <p class = "lessons_text">Date: ${formatDateNumbers(date.getDate())}.${formatDateNumbers(date.getMonth())}.${date.getFullYear()}</p>
                    <p class = "lessons_text">Time: ${formatDateNumbers(date.getHours())}:${formatDateNumbers(date.getMinutes())}</p>
                    <p class = "lessons_text">Duration: ${dataItem.duration}</p>
                    <p class = "lessons_text">Max users: <span class = "max-users_digit">${dataItem.max_users}</span></p>
                    <p class = "lessons_text current_users">Current users: <span class = "current-users_digit">${dataItem.current_users}</span></p>
                    <button class = "sign-up__button">Записаться</button>
                    <button class = "unsign-up__button button-blocked">Отменить запись</button>
                </div>`
            );
        }
    }

}

function signUp(e) {
    e.preventDefault();
    const currentItem = e.target.closest(".lessons__item");
    const currentUsersDigit = currentItem.querySelector(".current-users_digit");
    const maxUsersDigit = currentItem.querySelector(".max-users_digit");
    const maxUsers = +maxUsersDigit.innerHTML;
    let currentUsers = +currentUsersDigit.innerHTML;

    if (currentUsers < maxUsers) {
        currentUsersDigit.innerHTML = ++currentUsers;
        signUpCounter++;

        if (currentUsers === maxUsers) {
            e.target.classList.add("button-blocked");
        }

        const removeButton = e.target.nextElementSibling;
        if (removeButton.classList.contains("button-blocked")) {
            removeButton.classList.remove("button-blocked");
        }
    }
}

function removeSignUp(e) {
    e.preventDefault();
    if (signUpCounter > 0) {
        const currentItem = e.target.closest(".lessons__item");
        const currentUsersDigit = currentItem.querySelector(".current-users_digit");
        const maxUsersDigit = currentItem.querySelector(".max-users_digit");
        const maxUsers = +maxUsersDigit.innerHTML;
        let currentUsers = +currentUsersDigit.innerHTML;

        if ((currentUsers - 1) >= 0) {
            if (currentUsers === maxUsers) {
                e.target.previousElementSibling.classList.remove("button-blocked");
            }

            currentUsersDigit.innerHTML = --currentUsers;
            signUpCounter--;

            if (currentUsers === 0) {
                e.target.classList.add("button-blocked");
            }
        }
    }
}

let signUpCounter = 0;

fetch("data.json")
    .then(response => response.json())
    .then(json => uploadDataOnSite(json))
    .catch((e) => console.log(e));

const interval = setInterval(function () {
    const signUpButtons = document.querySelectorAll(".sign-up__button");
    const unSignUpButtons = document.querySelectorAll(".unsign-up__button");

    if (signUpButtons.length > 0) {
        clearInterval(interval);

        signUpButtons.forEach(elem => {
            elem.addEventListener("click", signUp);
        });
    }

    if (unSignUpButtons.length > 0) {
        clearInterval(interval);

        unSignUpButtons.forEach(elem => {
            elem.addEventListener("click", removeSignUp);
        });
    }
}, 500); // проверка каждые полсекунды

