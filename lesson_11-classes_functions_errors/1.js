"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    constructor(bookArray) {
        const bookSet = new Set(bookArray);
        try {            
            if (bookSet.size !== bookArray.length) {
                throw new Error("Error!");
            }
        } catch(e) {
            console.log("Error! The book list has duplicates");
        }
        
        this.#books = bookSet;
    }

    get allBooks() {
        return this.#books;
    }
    
    addBook(title) {
        for (const book of this.#books) {
            try {
                if (book === title) {
                    throw new Error("Error!");
                }
            } catch(e) {
                console.log(`Error! The book with title \"${title}\" already exists in the book list`);
            }            
        }        
        this.#books.add(title);
    }

    removeBook(title) {
        try {
            if (!this.#books.delete(title)) {
                throw new Error("Error!");
            } 
        } catch(e) {
            console.log(`Error! There is no book with title \"${title}\"`);
        }
        
    }

    hasBook(title) {
        return this.#books.has(title);
    }
}

const lib = new Library(["Война и мир", "Унесенные ветром", "Война и мир"]);
console.log(lib.allBooks);

lib.addBook("Унесенные ветром");
console.log(lib.allBooks);

lib.addBook("New book");
lib.addBook("Ася");
lib.addBook("Гранатовый браслет");
console.log(lib.allBooks);

lib.removeBook("No book");
console.log(lib.allBooks);
lib.removeBook("Ася");
console.log(lib.allBooks);

console.log(lib.hasBook("Гранатовый браслет"));
console.log(lib.hasBook("Евгений Онегин"));