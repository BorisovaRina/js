// ===== ТЕМА 9: СТРОКИ =====
// 15 заданий

// Задание 1: Создание строки
function task1() {
  const str = "Hello, World!";
  return str;
}

// Задание 2: Длина строки
function task2() {
  const str = "JavaScript";
  return str.length;
}

// Задание 3: Доступ к символу по индексу
function task3() {
  const str = "Hello";
  return str[1];
}

// Задание 4: charAt - получить символ
function task4() {
  const str = "Hello";
  return str.charAt(0);
}

// Задание 5: indexOf - найти подстроку
function task5() {
  const str = "Hello World";
  return str.indexOf('World');
}

// Задание 6: includes - проверить наличие подстроки
function task6() {
  const str = "Hello World";
  return str.includes('World');
}

// Задание 7: substring - получить подстроку
function task7() {
  const str = "Hello World";
  return str.substring(0, 5);
}

// Задание 8: slice - получить часть строки
function task8() {
  const str = "Hello World";
  return str.slice(6);
}

// Задание 9: toUpperCase - в верхний регистр
function task9() {
  const str = "hello";
  return str.toUpperCase();
}

// Задание 10: toLowerCase - в нижний регистр
function task10() {
  const str = "HELLO";
  return str.toLowerCase();
}

// Задание 11: trim - удалить пробелы
function task11() {
  const str = "  Hello  ";
  return str.trim();
}

// Задание 12: split - разбить на массив
function task12() {
  const str = "a,b,c,d";
  return str.split(',');
}

// Задание 13: replace - заменить подстроку
function task13() {
  const str = "Hello World";
  return str.replace('World', 'JavaScript');
}

// Задание 14: Шаблонные строки (template literals)
function task14() {
  const name = "John";
  const age = 30;
  return `${name} is ${age} years old`;
}

// Задание 15: startsWith и endsWith
function task15() {
  const str = "Hello World";
  return str.startsWith('Hello') && str.endsWith('World');
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
