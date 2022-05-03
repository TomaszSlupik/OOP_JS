//  OOP - obiekty
const newPerson = {
	first_name: "Jan",
	last_name: "Kowalski",
	age: 25,
	city: "Warszawa",
	car: {
		brand: "BMW",
		model: "M5",
		color: "black",
	},
};

console.log(newPerson);
console.log(newPerson.first_name);
console.log(newPerson.age);
console.log(newPerson.car.brand);

const nextPerson = {
	first_name: "Jakub",
	last_name: "Kowalkiewicz",
	age: 44,
	interested: {
		food: "spaghetti",
		programming: "java",
	},
};

console.log(
	`${nextPerson.first_name} ${nextPerson.last_name} lubi jeść ${nextPerson.interested.food} i uwielbia programować w ${nextPerson.interested.programming}`
);

// Metody w obiektach
const holiday = {
	country: "Hiszpania",
	city: "Madryt",
	look() {
		console.log(`Jest bardzo gorąco`);
	},
};

holiday.look();

// Dodawanie elementów do obiektów
const personOne = {
	first_name: "Milena",
	last_name: "Samborska",
	"ulubiony-kolor": "Niebieski",
};

personOne.city = "Milena mieszka w Warszawie";

console.log(personOne);

const dogName = "Reks";
const dogAge = 2;

const dog = {
	name: dogName,
	age: dogAge,
};

console.log(dog);

dog["2020-11-02"] = "data";

console.log(dog);

const cityNow = "Poznań";

const info = {};

info.cityNow = "Poznania";

console.log(`Dzis jade do ${info.cityNow}`);

// Pętla for in
const personTwo = {
	first_name: "Michał",
	last_name: "Kozakiewicz",
	age: 24,
	hobby: "gra na konsoli",
};

for (data in personTwo) {
	console.log(personTwo[data]);
}

// This

const personThree = {
	first_name: "Natalia",
	methodPerson() {
		console.log(this.first_name);
	},
};

personThree.methodPerson();

// KONSTRUKTORY

function User(name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.text = function () {
		console.log(`Dziś mamy ładną pogodę ${this.name}`);
	};
}

const userThree = new User("Jan", 55, "185 cm");
const userFour = new User("Kamil", "Stasiak", 19, "170 cm");
console.log(userThree, userFour);

userFour.text();

function Holiday(city, weather) {
	this.city = city;
	this.weather = weather;
	this.task = function () {
		console.log(`W ${this.city} mamy ${this.weather} pogodę`);
	};
}

const holidayOne = new Holiday("Zakopane", "pochmurną");
const holidayTwo = new Holiday("Gdańsk", "słoneczną");

holidayOne.task();
holidayTwo.task();

console.log(holidayOne);
console.log(holidayTwo);

// PROTOTYPY

Holiday.prototype.taskTwo = function () {
	console.log(`To jest Prototyp. W ${this.city} mamy ${this.weather} pogodę`);
};

holidayOne.taskTwo();
holidayTwo.taskTwo();
