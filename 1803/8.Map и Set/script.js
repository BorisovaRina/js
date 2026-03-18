// ===== ТЕМА 8: ОБЪЕКТЫ =====
// 15 заданий

// Задание 1: Создание объекта
function task1() {
  const obj = { name: "John", age: 30 };
  return obj;
}

// Задание 2: Доступ к свойству через точку
function task2() {
  const obj = { name: "John", age: 30 };
  return obj.name;
}

// Задание 3: Доступ к свойству через скобки
function task3() {
  const obj = { name: "John", age: 30 };
  return obj['age'];
}

// Задание 4: Добавление нового свойства
function task4() {
  const obj = { name: "John" };
  obj.age = 30;
  return obj;
}

// Задание 5: Удаление свойства
function task5() {
  const obj = { name: "John", age: 30 };
  delete obj.age;
  return obj;
}

// Задание 6: Object.keys() - получить ключи
function task6() {
  const obj = { name: "John", age: 30, city: "NYC" };
  return Object.keys(obj);
}

// Задание 7: Object.values() - получить значения
function task7() {
  const obj = { name: "John", age: 30, city: "NYC" };
  return Object.values(obj);
}

// Задание 8: Object.entries() - получить пары ключ-значение
function task8() {
  const obj = { name: "John", age: 30 };
  return Object.entries(obj);
}

// Задание 9: for...in для объекта
function task9() {
  const obj = { a: 1, b: 2, c: 3 };
  let result = [];
  for (const key in obj) {
    result.push(obj[key]);
  }
  return result;
}

// Задание 10: Проверка наличия свойства
function task10() {
  const obj = { name: "John", age: 30 };
  return 'name' in obj;
}

// Задание 11: Объект с методом
function task11() {
  const obj = {
    name: "John",
    greet: function() {
      return "Hello, " + this.name;
    }
  };
  return obj.greet();
}

// Задание 12: Object.assign() - копирование объекта
function task12() {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  return Object.assign({}, obj1, obj2);
}

// Задание 13: Деструктуризация объекта
function task13() {
  const obj = { name: "John", age: 30 };
  const { name, age } = obj;
  return name + " " + age;
}

// Задание 14: Spread оператор для объекта
function task14() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  return obj2;
}

// Задание 15: Вложенный объект
function task15() {
  const user = {
    name: "John",
    address: {
      city: "NYC",
      zip: "10001"
    }
  };
  return user.address.city;
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
