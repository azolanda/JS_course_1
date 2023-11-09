"use strict";

function removeVisibleClass() {
    const visibleImgContainer = sliderImgsContainers.find(imgContainer => imgContainer.classList.contains("slider__visible"));
    visibleImgContainer.classList.remove("slider__visible");
    return visibleImgContainer;
}

function sliderChange(e) {
    e.preventDefault();
    const imgContainersQantity = sliderImgsContainers.length;
    
    if(imgContainersQantity > 1) {
        const visibleImgContainer = removeVisibleClass();
        const indexOfImgContainer = visibleImgContainer.dataset.index;
        
        if(e.target.classList.contains("slider__next") || e.target.closest("slider__next")) {
            if(indexOfImgContainer < imgContainersQantity - 1) {
                visibleImgContainer.nextElementSibling.classList.add("slider__visible");
            }
            if(indexOfImgContainer == imgContainersQantity - 1) {
                sliderImgsContainers[0].classList.add("slider__visible");
            }
        }
    
        if(e.target.classList.contains("slider__previous") || e.target.closest("slider__previous")) {
            if(+indexOfImgContainer === 0) {
                sliderImgsContainers[imgContainersQantity - 1].classList.add("slider__visible");
                return;
            }   
            if(indexOfImgContainer < imgContainersQantity) {
                visibleImgContainer.previousElementSibling.classList.add("slider__visible");
            }
        }
    }
}

function pushCircles() {
    for(const circleIndex of sliderImgsContainers.keys()) {
        sliderCirclesContainer.insertAdjacentHTML("beforeend", `<div data-index = ${circleIndex} class = "slider__circle"></div>`);
    }
}

function choosePictureByCircle(e) {
    e.preventDefault();

    if(sliderCircles.length > 1) {
        const chosedCircleIndex = e.target.dataset.index;
        removeVisibleClass();
        sliderImgsContainers[chosedCircleIndex].classList.add("slider__visible");
    }
}

const sliderImgsContainers = Array.from(document.querySelectorAll(".slider__img-container"));
const sliderCirclesContainer = document.querySelector(".slider__circles");
pushCircles();
const sliderCircles = Array.from(document.querySelectorAll(".slider__circle"));
sliderCircles.forEach(item => {
        item.addEventListener("click", choosePictureByCircle);
});

const nextButton = document.querySelector(".slider__next");
nextButton.addEventListener("click", sliderChange);

const previousButton = document.querySelector(".slider__previous");
previousButton.addEventListener("click", sliderChange);