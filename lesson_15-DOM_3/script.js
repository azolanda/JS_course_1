"use strict";

function drawPhoto(data) {
    if(data) {
        const src = data.urls.small;
        const photographName = data.user.name;
        document.querySelector(".image__container").insertAdjacentHTML("afterbegin", 
            `<img src="${src}" width = "300" alt="photo" class="img__new">
            <h3 class="photograph__name">${photographName}</h3>`
        );

        previousPhotos.push(
            {
                "photoSrc": src, 
                "photographName": photographName,
                "likeCounter": likeCounter,
            }
        );

        localStorage.setItem("previousPhotos", JSON.stringify(previousPhotos));
    }
}

function addLike(e) {
    e.preventDefault();

    likeCounter++;
    likeCounterElement.innerHTML = `Количество лайков: ${likeCounter}`;
    
    previousPhotos[previousPhotos.length - 1].likeCounter++;
    localStorage.setItem("previousPhotos", JSON.stringify(previousPhotos));
}

function uploadPreviousPhotos(e) {
    e.preventDefault();

    for(let i = 0; i < previousPhotos.length - 1; i++) {
        const src = previousPhotos[i].photoSrc;
        const photographName = previousPhotos[i].photographName;
        const likeCounter = previousPhotos[i].likeCounter;
        document.querySelector(".container").insertAdjacentHTML("beforeend", 
            `<div class="image__container">
                <img src="${src}" width = "300" alt="photo" class="img__new">
                <h3 class="photograph__name">${photographName}</h3>
                <p class="like__counter">Количество лайков: ${likeCounter}</p>
            </div>`
        );
    }
}

fetch("https://api.unsplash.com/photos/random/?client_id=GgFTB4A_lPLQ9IT40vEwCMLQikHyIMK8xTtqk1QMQfA")
    .then(response => response.json())
    .then(obj => drawPhoto(obj))
    .catch((e) => console.log(e));

let previousPhotos = [];
const likeButton = document.querySelector("#like");
const likeCounterElement = document.querySelector(".like__counter");
const likeButtonPrevious = document.querySelector("#previous_like");
let likeCounter = 0;

likeButton.addEventListener("click", addLike);

if(localStorage.getItem("previousPhotos")) {
    previousPhotos =  JSON.parse(localStorage.getItem("previousPhotos"));
    likeButtonPrevious.addEventListener("click", uploadPreviousPhotos);
}