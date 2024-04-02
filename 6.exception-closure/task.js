// Задание номер один
function parseCount(parseValue) {
	if (Number.isNaN(Number.parseFloat(parseValue))) {
		throw new Error('Невалидное значение');
	} else {
		return Number.parseFloat(parseValue);
	}
}

function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
	} catch (error) {
		return error;
	}
}

// Тесты задания номер один
console.log("________________________Тесты задания №1______________________")
console.log(parseCount(3));
console.log(parseCount("3"));
// console.log(parseCount("два"));
console.log(validateCount(3));
console.log(validateCount("3"));
console.log(validateCount("два"));

// Задание номер два
class Triangle {
	constructor(side_a, side_b, side_c) {
		if ((side_a + side_b <= side_c) || (side_a + side_c <= side_b) || (side_b + side_c <= side_a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.side_a = side_a;
		this.side_b = side_b;
		this.side_c = side_c;
	}

	// Определение периметра треугольника
	get perimeter() {
		return this.side_a + this.side_b + this.side_c;
	}

	// Определение площади треугольника
	get area() {
		const p = this.perimeter / 2;
		return Math.round(Math.sqrt(p * (p - this.side_a) * (p - this.side_b) * (p - this.side_c)) * 1000) / 1000;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		class ItNotTriangle {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}

		return new ItNotTriangle();
    }
	
}

// Тесты задания номер два
console.log("________________________Тесты задания номер два_______________________________")
let triangle = new Triangle(3, 3, 4);

console.log(triangle.perimeter);
console.log(triangle.area);

// let triangle_not = new Triangle(3, 3, 6);

// console.log(triangle_not.perimeter);
// console.log(triangle_not.area);

console.log(getTriangle(3, 3, 4));
console.log(getTriangle(3, 3, 6));