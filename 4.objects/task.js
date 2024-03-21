function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

// let student_one = new Student("Kirill", "man", 23);
// let student_two = new Student("Anna", "woman", 21);
// let student_three = new Student("Stepan", "man", 20);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length != 0) {
			const sum = this.marks.reduce((acc, number) => acc + number, 0);

			return  sum / this.marks.length;
		} else {
			return  0
		}
	}


// Student.prototype.getAverage = function () {
//     if(this.hasOwnProperty('marks') && this.marks.length != 0){
//         return this.marks.reduce((acc, num, index, arr) => ass + num / arr.length, 0);
//     } else {
//         return 0;
//     }
  
// }

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}


let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}