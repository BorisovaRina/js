// ===== ТЕМА 2: ПЕРЕМЕННЫЕ И ТИПЫ ДАННЫХ =====
// 16 заданий

// Задание 1: Объявить переменную var
function task1() {
  var x = 10;
  return x;
}

// Задание 2: Объявить переменную let
function task2() {
  let y = 20;
  return y;
}

// Задание 3: Объявить переменную const
function task3() {
  const z = 30;
  return z;
}

// Задание 4: Изменить значение переменной let
function task4() {
  let a = 5;
  a = 10;
  return a;
}

// Задание 5: Демонстрация блочной области видимости
function task5() {
  let x = 1;
  {
    let x = 2;
  }
  return x;
}

// Задание 6: Использование const для массива
function task6() {
  const arr = [1, 2, 3];
  arr[0] = 10;
  return arr;
}

// Задание 7: Использование const для объекта
function task7() {
  const obj = { name: "John" };
  obj.name = "Jane";
  return obj;
}

// Задание 8: Проверка типа переменной
function task8() {
  const num = 42;
  return typeof num === 'number';
}

// Задание 9: Преобразование строки в число
function task9() {
  const str = "123";
  return Number(str);
}

// Задание 10: Преобразование числа в строку
function task10() {
  const num = 456;
  return String(num);
}

// Задание 11: Преобразование в булево значение
function task11() {
  return Boolean(1);
}

// Задание 12: Проверка переменной на undefined
function task12() {
  let x;
  return x === undefined;
}

// Задание 13: Использование parseInt
function task13() {
  return parseInt("42.5");
}

// Задание 14: Использование parseFloat
function task14() {
  return parseFloat("3.14");
}

// Задание 15: Переменная с динамическим типом
function task15() {
  let x = 10;
  x = "string";
  return typeof x;
}

// Задание 16: Множественное объявление переменных
function task16() {
  const a = 1, b = 2, c = 3;
  return a + b + c;
}

// Запуск всех функций
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 16; i++) {
    const func = window[`task${i}`];
    if (func) {
      console.log(`=== Task ${i} ===`, func());
    }
  }
});