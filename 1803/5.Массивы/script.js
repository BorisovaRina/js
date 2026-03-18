// ===== ТЕМА 5: ЦИКЛЫ =====
// 15 заданий

// Задание 1: for loop базовый
function task1() {
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    sum += i;
  }
  return sum;
}

// Задание 2: while loop
function task2() {
  let i = 0;
  let sum = 0;
  while (i < 5) {
    sum += i;
    i++;
  }
  return sum;
}

// Задание 3: do-while loop
function task3() {
  let i = 0;
  let sum = 0;
  do {
    sum += i;
    i++;
  } while (i < 5);
  return sum;
}

// Задание 4: break в цикле
function task4() {
  let result = "";
  for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    result += i;
  }
  return result;
}

// Задание 5: continue в цикле
function task5() {
  let result = "";
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    result += i;
  }
  return result;
}

// Задание 6: for loop от 1 до 10
function task6() {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  return arr;
}

// Задание 7: Вложенные циклы
function task7() {
  let result = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      result += (i * j) + " ";
    }
  }
  return result;
}

// Задание 8: for...of для массива
function task8() {
  const arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

// Задание 9: for...in для объекта
function task9() {
  const obj = { a: 1, b: 2, c: 3 };
  let result = [];
  for (const key in obj) {
    result.push(key);
  }
  return result;
}

// Задание 10: Подсчет от 10 до 1
function task10() {
  let result = "";
  for (let i = 10; i >= 1; i--) {
    result += i + " ";
  }
  return result.trim();
}

// Задание 11: forEach для массива
function task11() {
  const arr = [1, 2, 3];
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
}

// Задание 12: map для трансформации
function task12() {
  const arr = [1, 2, 3];
  return arr.map(x => x * 2);
}

// Задание 13: filter для фильтрации
function task13() {
  const arr = [1, 2, 3, 4, 5];
  return arr.filter(x => x > 2);
}

// Задание 14: reduce для суммирования
function task14() {
  const arr = [1, 2, 3, 4, 5];
  return arr.reduce((sum, x) => sum + x, 0);
}

// Задание 15: while с условием
function task15() {
  let i = 0;
  while (i < 100) {
    if (i > 5) break;
    i++;
  }
  return i;
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
