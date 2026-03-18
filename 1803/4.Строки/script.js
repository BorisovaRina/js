// ===== ТЕМА 4: УСЛОВНЫЕ ОПЕРАТОРЫ =====
// 16 заданий

// Задание 1: if с одним условием
function task1() {
  const x = 10;
  if (x > 5) return "x больше 5";
  return "x не больше 5";
}

// Задание 2: if-else
function task2() {
  const x = 3;
  if (x > 5) return "больше";
  else return "не больше";
}

// Задание 3: if-else if-else
function task3() {
  const x = 5;
  if (x < 5) return "меньше";
  else if (x === 5) return "равно";
  else return "больше";
}

// Задание 4: Множественные условия с &&
function task4() {
  const x = 10;
  if (x > 5 && x < 20) return true;
  return false;
}

// Задание 5: Множественные условия с ||
function task5() {
  const x = 2;
  if (x < 5 || x > 50) return true;
  return false;
}

// Задание 6: Отрицание с !
function task6() {
  const x = true;
  if (!x) return "false";
  return "true";
}

// Задание 7: switch с case
function task7() {
  const x = 2;
  switch (x) {
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    default: return "other";
  }
}

// Задание 8: switch с break
function task8() {
  const x = 1;
  let result = "";
  switch (x) {
    case 1:
      result += "a";
      break;
    case 2:
      result += "b";
      break;
  }
  return result;
}

// Задание 9: Вложенные if
function task9() {
  const x = 10;
  if (x > 5) {
    if (x > 15) return "очень большое";
    return "большое";
  }
  return "маленькое";
}

// Задание 10: Условие с falsy значениями
function task10() {
  const x = 0;
  if (x) return "true";
  return "false";
}

// Задание 11: Условие с truthy значениями
function task11() {
  const x = "hello";
  if (x) return "true";
  return "false";
}

// Задание 12: Проверка null
function task12() {
  let x = null;
  if (x === null) return "null";
  return "not null";
}

// Задание 13: Проверка undefined
function task13() {
  let x;
  if (x === undefined) return "undefined";
  return "defined";
}

// Задание 14: Использование typeof в условии
function task14() {
  const x = "test";
  if (typeof x === 'string') return "string";
  return "not string";
}

// Задание 15: Проверка массива с Array.isArray
function task15() {
  const x = [1, 2, 3];
  if (Array.isArray(x)) return "array";
  return "not array";
}

// Задание 16: Двойное отрицание !!
function task16() {
  const x = 1;
  return !!x === true;
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
