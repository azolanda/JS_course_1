"use strict";

/*  Задание 1: ""Управление библиотекой книг""
    Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
    Свойство title (название) - строка, название книги.
    Свойство author (автор) - строка, имя автора книги.
    Свойство pages (количество страниц) - число, количество страниц в книге.
    Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц). 
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo = () => {
        console.log(`Название: ${this.title},\nавтор: ${this.author},\nкол-во страниц: ${this.pages}.`);
    }
}

const firstBook = new Book('Евгений Онегин', 'А.С. Пушкин', 100);
firstBook.displayInfo();