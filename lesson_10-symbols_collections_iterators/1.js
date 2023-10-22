"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

class Album{
  constructor(title, artist, year){
    this.title = title;
    this.artist = artist;
    this.year = year;
  }
}

class MusicCollection{
  constructor(albums){
    this.albums = albums;
  }
  
  *[Symbol.iterator]() {
    for(const album of this.albums){
      yield album;
    }
  }
}


const albums = [
  new Album("Корабль судьбы", "Николай Басков","2020"),
  new Album("Маски", "Кристина Орбакайте", "2013"),
  new Album("Не бойся, я с тобой!", "Руки вверх", "2001"),
  new Album("Шипы и розы", "Стрелки", "2023"),
  new Album("Мне приснилась осень", "Алсу", "2002"),
];

const musicCollection1 = new MusicCollection(albums);

for(const item of musicCollection1){
  console.log(`${item.title} - ${item.artist} (${item.year})`);
}