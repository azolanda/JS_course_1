"use strict";

/*
    Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
    Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

    const student = new Student();
    student.setName('Питер Паркер);
    student.setAge(20);
    student.setAverageGrade(85);
    student.displayInfo();
*/

class Student {
    #name = null;
    #age = null;
    #averageGrade = null;

    setName(name) {
        if (typeof name === 'string') {
            this.#name = name;
        }
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        if (isFinite(age)) {
            this.#age = age;
        }
    }

    getAge() {
        return this.#age;
    }

    setAverageGrade(averageGrade) {
        if (isFinite(averageGrade)) {
            this.#averageGrade = averageGrade;
        }
    }

    getAverageGrade() {
        return this.#averageGrade;
    }

    displayInfo = () => {
        console.log(`Name: ${this.getName()}\nAge: ${this.getAge()}\nAverageGrade: ${this.getAverageGrade()}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();