// ===== ТЕМА 13: КЛАССЫ И ООП =====
// 15 заданий

// Задание 1: Простой класс
class Animal1 {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
}

function task1() {
  const dog = new Animal1("Dog");
  return dog.speak();
}

// Задание 2: Класс с методом
class Counter2 {
  constructor() {
    this.count = 0;
  }
  increment() {
    return ++this.count;
  }
}

function task2() {
  const counter = new Counter2();
  return counter.increment();
}

// Задание 3: Класс с getter
class Rectangle3 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}

function task3() {
  const rect = new Rectangle3(5, 4);
  return rect.area;
}

// Задание 4: Класс с setter
class Person4 {
  constructor() {
    this._age = 0;
  }
  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
}

function task4() {
  const person = new Person4();
  person.age = 30;
  return person.age;
}

// Задание 5: Наследование с extends
class Animal5 {
  constructor(name) {
    this.name = name;
  }
}

class Dog5 extends Animal5 {
  bark() {
    return this.name + " barks";
  }
}

function task5() {
  const dog = new Dog5("Rex");
  return dog.bark();
}

// Задание 6: super для вызова родительского конструктора
class Vehicle6 {
  constructor(brand) {
    this.brand = brand;
  }
}

class Car6 extends Vehicle6 {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}

function task6() {
  const car = new Car6("Toyota", "Camry");
  return car.brand + " " + car.model;
}

// Задание 7: super для вызова метода родителя
class Shape7 {
  describe() {
    return "I am a shape";
  }
}

class Circle7 extends Shape7 {
  describe() {
    return super.describe() + ", specifically a circle";
  }
}

function task7() {
  const circle = new Circle7();
  return circle.describe();
}

// Задание 8: Статический метод
class MathHelper8 {
  static add(a, b) {
    return a + b;
  }
}

function task8() {
  return MathHelper8.add(5, 3);
}

// Задание 9: Статическое свойство
class Config9 {
  static apiUrl = "https://api.example.com";
}

function task9() {
  return Config9.apiUrl;
}

// Задание 10: instanceof проверка
class User10 {}

function task10() {
  const user = new User10();
  return user instanceof User10;
}

// Задание 11: Частные поля
class BankAccount11 {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  
  getBalance() {
    return this.#balance;
  }
}

function task11() {
  const account = new BankAccount11();
  account.deposit(100);
  return account.getBalance();
}

// Задание 12: Методы экземпляра и типы
class Calculator12 {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
}

function task12() {
  const calc = new Calculator12();
  return calc.add(3, 4);
}

// Задание 13: Множественное наследование через компози
class Logger13 {
  log(msg) {
    return "LOG: " + msg;
  }
}

function withLogging(baseClass) {
  return class extends baseClass {
    logAction(msg) {
      return this.log(msg);
    }
  };
}

function task13() {
  class MyClass extends withLogging(Logger13) {}
  const obj = new MyClass();
  return obj.logAction("Test");
}

// Задание 14: Проверка прототипа
class Animal14 {}

function task14() {
  const dog = new Animal14();
  return dog instanceof Animal14;
}

// Задание 15: Constructor свойство
class MyClass15 {}

function task15() {
  const obj = new MyClass15();
  return obj.constructor === MyClass15;
}

// Запуск всех функций
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 15; i++) {
    const func = window[`task${i}`];
    if (func) {
      console.log(`=== Task ${i} ===`, func());
    }
  }
});
