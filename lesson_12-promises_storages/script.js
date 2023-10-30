"use strict";

/*
###Задание
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
*/
const container = document.querySelector(".items__container");

function pushInitialProductsFromStorageOnSite() {  
  if(localStorage.length > 0) {
    const storageItems = Object.entries(localStorage);
    
    for(const storageItem of storageItems) {
      const productReviewsData = JSON.parse(storageItem[1]);
      
      if(productReviewsData.length > 0) {
        console.log(storageItem[1].length);
        container.insertAdjacentHTML("beforeend", `
        <div class = \"item\">
          <div class = \"item__about\">
            <h3 class=\"item__heading\">${storageItem[0]}</h3>
            <div class=\"reviews__block\">
              <button class=\"review__box-heading\">View reviews</button>
              <div class=\"review__box review_box-hidden\">
              </div>
            </div>
          </div>
        </div>`);
      
        let counter = 0;

        for(const productReview of productReviewsData) {
          const reviewBoxes = document.querySelectorAll(".review__box");
          const targetReviewBox = reviewBoxes[reviewBoxes.length - 1];
          targetReviewBox.insertAdjacentHTML("beforeend", `
          <div class = \"review__item\">
            <p class = "review__text" data-count = \"${counter}\">${productReview}</p>
            <button class = \"btn__deletereview\">Delete review</button>
          </div>`);
          counter++;
        }
      }
    }
  } else {
    container.insertAdjacentHTML("afterbegin", "<p>There is no review on site. You can add the first review </p>");
  }
}

function pushInitialReviewsFromStorageOnSite(e) {
  e.preventDefault();

  const targetReviews = e.target;
  targetReviews.nextElementSibling.classList.remove("review_box-hidden");
}

function deleteReviewFromProduct(e) {
  e.preventDefault();
  
  const targetReview = e.target.closest(".review__item");
  const targetProduct = targetReview.closest(".item__about").querySelector(".item__heading").innerHTML;
  const reviews = JSON.parse(localStorage.getItem(targetProduct));
  const reviewIndex = targetReview.querySelector(".review__text").dataset.count;
  
  reviews.splice(reviewIndex, 1);
  if(reviews.length === 0) {
    targetReview.closest(".item").remove();
  } else {
    targetReview.remove();  
  }

  localStorage.setItem(targetProduct, JSON.stringify(reviews));  
}

function pushOnPageReviewItem(elem, index, value) {
  const targetItem = elem.closest(".item__about");
  const targetReviewBox = targetItem.querySelector(".review__box");
  targetReviewBox.insertAdjacentHTML("beforeend", `
  <div class = \"review__item\">
    <p class = "review__text" data-count = \"${index}\">${value}</p>
    <button class = \"btn__deletereview\" onclick = \"deleteReviewFromProduct(event)\">Delete review</button>
  </div>`);
}

function addReview(e) {
  e.preventDefault();
      
  const reviewForm = document.querySelector(".review__form");
  const productName = document.querySelector(".product_name");
  const userReview = document.querySelector(".user_review");

  while(userReview.nextElementSibling) {
    userReview.nextElementSibling.remove();
  }

  try {
    if(userReview.value.trim().length >= 15 && userReview.value.trim().length <= 500) {
      const successText = document.createElement("p");
      successText.innerHTML = "Success! You review was added";
      successText.className = "success_text";
      userReview.after(successText);
      
      if(localStorage.getItem(productName.value.trim())) {
        const reviewHeadings = document.querySelectorAll(".item__heading");
        const storageItemValue = JSON.parse(localStorage.getItem(productName.value.trim()));
        storageItemValue.push(userReview.value.trim());
        const pushReviewIndex = storageItemValue.length - 1;
        localStorage.setItem(productName.value.trim(), JSON.stringify(storageItemValue));
        
        for(const reviewHeading of reviewHeadings) {
          if(reviewHeading.innerHTML === productName.value.trim()) {
            pushOnPageReviewItem(reviewHeading, pushReviewIndex, userReview.value.trim());
          }
        }
      } else {
        localStorage.setItem(productName.value.trim(), JSON.stringify(new Array(userReview.value.trim())));

        container.insertAdjacentHTML("beforeend", `
        <div class = \"item\">
          <div class = \"item__about\"><h3 class=\"item__heading\">${productName.value.trim()}</h3>
            <div class=\"reviews__block\">
              <button class=\"review__box-heading\" onclick = \"pushInitialReviewsFromStorageOnSite(event)\">View reviews</button>
              <div class=\"review__box review_box-hidden\"></div>
            </div>
          </div>
        </div>`);

        const headings = document.querySelectorAll(".item__heading");
        pushOnPageReviewItem(headings[headings.length - 1], 0, userReview.value.trim());
      }
      reviewForm.reset();
    } else {
      throw new Error("Error! Invalid  length of the review");
    }
  } catch(e) {
    const errorText = document.createElement("p");
    errorText.innerHTML = e.message;
    errorText.className = "error_text";
    userReview.after(errorText);
  }  
}

pushInitialProductsFromStorageOnSite();

const button = document.querySelector(".review__button");
button.addEventListener("click", addReview);

const viewReviewButtons = document.querySelectorAll(".review__box-heading");
viewReviewButtons.forEach(viewReviewButton => {
  viewReviewButton.addEventListener("click", pushInitialReviewsFromStorageOnSite);
});

const btnsDeleteReview = document.querySelectorAll(".btn__deletereview");
btnsDeleteReview.forEach(btnDeleteReview => {
  btnDeleteReview.addEventListener("click", deleteReviewFromProduct);
});