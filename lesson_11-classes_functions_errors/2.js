"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function createReviewBox(reviewObj) {
  const reviewBox = document.createElement("div");
  reviewBox.className = "review__box";

  const reviewUserId = document.createElement("h4");
  reviewUserId.innerHTML = "Id: " + reviewObj.id;
  reviewBox.appendChild(reviewUserId);

  const reviewText = document.createElement("p");
  reviewText.className = "review__text";
  reviewText.innerHTML = reviewObj.text;
  reviewBox.appendChild(reviewText);

  return reviewBox;
}

function pushInitialReviewsOnSite(reviews) {
  const productsOnSite = document.querySelectorAll(".item__heading");
  
  for(const product of productsOnSite) {
    for(const review of reviews) {
      if(review.product === product.innerHTML){
        const reviewsTargetBox = product.parentElement.nextElementSibling;
        const reviewsForProduct = review.reviews;
        
        for(const reviewItem of reviewsForProduct) {
          const reviewBox = createReviewBox(reviewItem);
          reviewsTargetBox.querySelector(".review__box-heading").after(reviewBox);
        }
      }
    }    
  }
}

function addNewReview(e) {
  e.preventDefault();
  const productItem = e.target.closest(".item");
  const productName = productItem.querySelector(".item__heading").innerHTML;
  const targetPlace = productItem.querySelector(".review__form");

  const userId = productItem.querySelector(".user_id");
  const userReview = productItem.querySelector(".user_review");
  
  try {
    if(userReview.value.length >= 50 && userReview.value.length <= 500) {
      const reviewObj = {id: userId.value, text: userReview.value};
      const reviewBox = createReviewBox(reviewObj);
            
      targetPlace.before(reviewBox);
      targetPlace.reset();

      if(userReview.nextElementSibling && userReview.nextElementSibling.innerHTML === "Error! Invalid  length of the review") {
        userReview.nextElementSibling.remove();
      }
      
      for(const item of initialData) {
        if(item.product === productName) {
          item.reviews.push(reviewObj);
          console.log(initialData);  
          return;
        }
      }
      initialData.push({product: productName, reviews: [reviewObj]});
      console.log(initialData);
    } else {
      throw new Error("Error! Invalid  length of the review");
    }
  } catch(e) {
    const errorText = document.createElement("p");
    errorText.innerHTML = e.message;
    userReview.after(errorText);
  }  
}

pushInitialReviewsOnSite(initialData);

const buttons = document.querySelectorAll(".review__button");
buttons.forEach((button) => {
  button.addEventListener("click", addNewReview);
});