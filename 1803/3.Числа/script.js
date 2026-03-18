
3-operators
// ===== ТЕМА 3: ОПЕРАТОРЫ =====
// 16 заданий

// Задание 1: Сложение
function task1() {
  return 5 + 3;
}

// Задание 2: Вычитание
function task2() {
  return 10 - 4;
}

// Задание 3: Умножение
function task3() {
  return 6 * 7;
}

// Задание 4: Деление
function task4() {
  return 20 / 4;
}

// Задание 5: Остаток от деления
function task5() {
  return 17 % 5;
}

// Задание 6: Возведение в степень
function task6() {
  return 2 ** 8;
}

// Задание 7: Инкремент
function task7() {
  let x = 5;
  return ++x;
}

// Задание 8: Декремент
function task8() {
  let x = 5;
  return --x;
}

// Задание 9: Постинкремент
function task9() {
  let x = 5;
  return x++;
}

// Задание 10: Сравнение ==
function task10() {
  return 5 == "5";
}

// Задание 11: Сравнение ===
function task11() {
  return 5 === "5";
}

// Задание 12: Логический оператор &&
function task12() {
  return true && false;
}

// Задание 13: Логический оператор ||
function task13() {
  return true || false;
}

// Задание 14: Логический оператор !
function task14() {
  return !true;
}

// Задание 15: Тернарный оператор
function task15() {
  return 5 > 3 ? "Yes" : "No";
}

// Задание 16: Оператор присваивания с операцией
function task16() {
  let x = 10;
  x += 5;
  return x;
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