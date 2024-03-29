// Задание номер один: "Печатное издание"
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state *=  1.5;
    }

    set state(factState){
        (factState > 100)? this._state = 100:
        (factState < 0)? this._state = 0: this._state = factState;
    }

    get state(){
        return this._state;
    }
}
   
    console.log("_______Первая проверка________")

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

 class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
 }

 class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
 }

 class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);;
		this.type = "novel"
	}

}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}

}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}

}

console.log("__________Вторая проверка__________")

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15

// Задание номер два: "Библиотека".

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book)
        } else {
            console.log("Книгу необходимо отремонтировать.")
        }
    }

    findBookBy(type, value){
        for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name === bookName) {
            return this.books.splice(i, 1)[0];
          }
        }
        return null;
      }
}

console.log("__________Третья проверка__________")

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
// library.addBook(new FantasticBook("Неизвестный автор", "Люди - вершина эволюции", 1919, 3));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
// console.log(library.findBookBy("releaseDate", 1919))

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//Второе задание, часть 5 - тесты:

console.log("________Тесты второго задания часть 5_________")
const utopy = new FantasticBook("Неизвестный автор", "Люди - вершина эволюции", 1919, 3);

library.addBook(utopy);
console.log("В библиотеку добавлена книга: " + library.findBookBy("releaseDate", 1919).name);
console.log("Количество книг: " + library.books.length);

library.giveBookByName("Люди - вершина эволюции");
console.log("Из библиотеки забрана книга: " + utopy.name);
console.log("Количество книг в библиотеке после выдачи: " + library.books.length);

utopy.state = 25;
console.log("Испорчена книга: " + utopy.name);
library.addBook(utopy);
console.log("Количество книг в библиотеке: " + library.books.length);

utopy.fix();
console.log("Отремонтирована книга: " + utopy.name);
library.addBook(utopy);
console.log("Количество книг после ремонта: " + library.books.length);

// Задание номер три: студенты
class Student {
    constructor(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
    }

    addMark(mark, subject) {

		if (mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

    getAverageBySubject(subject) {

		if (!this.marks[subject]) {
			return 0;
		}

        return this.marks[subject].reduce((acc, cur, index, arr) => acc + cur/arr.length, 0);
	}

    getAverage() {

        return Object.keys(this.marks).reduce((ass, subject, index, arr) =>
        ass + this.getAverageBySubject(subject) / arr.length, 0);
	}

}

console.log("________Тесты третьего задания_________")

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
console.log(student.marks);
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.marks);
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75