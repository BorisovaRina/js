// ===== ТЕМА 1: ОСНОВЫ JAVASCRIPT =====
// 16 заданий

// Задание 1: Вывести "Hello, World!"
function task1() {
  console.log("Hello, World!");
  return "Hello, World!";
}

// Задание 2: Вывести число 42
function task2() {
  console.log(42);
  return 42;
}

// Задание 3: Вывести булево значение true
function task3() {
  console.log(true);
  return true;
}

// Задание 4: Создать комментарий и выполнить код
function task4() {
  // Это комментарий
  return "Code executed";
}

// Задание 5: Вывести многострочный текст
function task5() {
  const text = `Line 1
Line 2
Line 3`;
  console.log(text);
  return text;
}

// Задание 6: Использовать console.log для отладки
function task6() {
  console.log("Debug message");
  return "Logged";
}

// Задание 7: Вывести текущее время
function task7() {
  const now = new Date();
  console.log(now);
  return now;
}

// Задание 8: Вывести информацию о типе данных
function task8() {
  console.log(typeof 42);
  console.log(typeof "text");
  console.log(typeof true);
  return "Types logged";
}

// Задание 9: Вывести undefined
function task9() {
  let x;
  console.log(x);
  return x;
}

// Задание 10: Вывести null
function task10() {
  const x = null;
  console.log(x);
  return x;
}

// Задание 11: Вывести символ
function task11() {
  const sym = Symbol('test');
  console.log(sym);
  return sym;
}

// Задание 12: Вывести BigInt
function task12() {
  const big = 123456789012345678901234567890n;
  console.log(big);
  return big;
}

// Задание 13: Вывести объект
function task13() {
  const obj = { name: "John", age: 30 };
  console.log(obj);
  return obj;
}

// Задание 14: Вывести массив
function task14() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr);
  return arr;
}

// Задание 15: Вывести функцию
function task15() {
  function myFunc() { return 42; }
  console.log(myFunc);
  return myFunc;
}

// Задание 16: Вывести NaN
function task16() {
  console.log(NaN);
  return NaN;
}

// Запуск всех функций
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 16; i++) {
    const func = window[`task${i}`];
    if (func) {
      console.log(`=== Task ${i} ===`);
      func();
    }
  }
});