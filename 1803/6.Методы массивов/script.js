// ===== ТЕМА 6: ФУНКЦИИ =====
// 15 заданий

// Задание 1: Простая функция
function task1() {
  function add(a, b) {
    return a + b;
  }
  return add(5, 3);
}

// Задание 2: Функция без параметров
function task2() {
  function greet() {
    return "Hello";
  }
  return greet();
}

// Задание 3: Функция с параметрами по умолчанию
function task3() {
  function greet(name = "Guest") {
    return "Hello, " + name;
  }
  return greet();
}

// Задание 4: Стрелочная функция
function task4() {
  const add = (a, b) => a + b;
  return add(10, 5);
}

// Задание 5: Стрелочная функция с одним параметром
function task5() {
  const square = x => x * x;
  return square(4);
}

// Задание 6: Функция возвращающая объект
function task6() {
  const createUser = (name, age) => {
    return { name, age };
  };
  return createUser("John", 30);
}

// Задание 7: Вложенная функция (замыкание)
function task7() {
  function outer(x) {
    function inner(y) {
      return x + y;
    }
    return inner(5);
  }
  return outer(10);
}

// Задание 8: Функция через переменную
function task8() {
  const multiply = function(a, b) {
    return a * b;
  };
  return multiply(6, 7);
}

// Задание 9: Рекурсивная функция (факториал)
function task9() {
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  return factorial(5);
}

// Задание 10: Функция с rest параметром
function task10() {
  const sum = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
  };
  return sum(1, 2, 3, 4, 5);
}

// Задание 11: Функция с деструктуризацией параметра
function task11() {
  const printUser = ({ name, age }) => {
    return `${name} is ${age} years old`;
  };
  return printUser({ name: "John", age: 30 });
}

// Задание 12: Функция с this контекстом
function task12() {
  const obj = {
    name: "John",
    getName: function() {
      return this.name;
    }
  };
  return obj.getName();
}

// Задание 13: Стрелочная функция не имеет своего this
function task13() {
  const obj = {
    value: 42,
    getValue: () => {
      return typeof this.value;
    }
  };
  return obj.getValue();
}

// Задание 14: Функция с return пустой
function task14() {
  function test() {
    return;
  }
  return test() === undefined;
}

// Задание 15: Функция как callback
function task15() {
  function apply(func, a, b) {
    return func(a, b);
  }
  return apply((x, y) => x * y, 3, 4);
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
