// ===== ТЕМА 12: АСИНХРОННЫЙ КОД (PROMISES & ASYNC/AWAIT) =====
// 15 заданий

// Задание 1: Простой Promise
function task1() {
  return new Promise((resolve) => {
    resolve("Promise resolved");
  });
}

// Задание 2: Promise с then
function task2() {
  return new Promise((resolve) => {
    resolve(42);
  }).then(value => value * 2);
}

// Задание 3: Promise с catch
function task3() {
  return new Promise((resolve, reject) => {
    reject("Error");
  }).catch(error => error);
}

// Задание 4: Promise с finally
function task4() {
  return new Promise((resolve) => {
    resolve("Done");
  }).finally(() => "Finally block executed");
}

// Задание 5: setTimeout
function task5() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout completed");
    }, 100);
  });
}

// Задание 6: setInterval и clearInterval
function task6() {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 3) {
      clearInterval(interval);
      return "Interval completed";
    }
  }, 100);
  return "Interval set";
}

// Задание 7: requestAnimationFrame
function task7() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      resolve("Animation frame executed");
    });
  });
}

// Задание 8: async функция
async function task8() {
  return "Async function result";
}

// Задание 9: async с await
async function task9() {
  const result = await Promise.resolve(42);
  return result;
}

// Задание 10: async с error handling
async function task10() {
  try {
    const result = await Promise.reject("Error");
    return result;
  } catch (error) {
    return error;
  }
}

// Задание 11: Promise.all
function task11() {
  return Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
}

// Задание 12: Promise.race
function task12() {
  return Promise.race([
    new Promise(resolve => setTimeout(() => resolve("First"), 100)),
    new Promise(resolve => setTimeout(() => resolve("Second"), 200))
  ]);
}

// Задание 13: fetch (имитация)
function task13() {
  return new Promise((resolve) => {
    resolve({ status: 200, data: "Response" });
  });
}

// Задание 14: Цепочка промисов
function task14() {
  return Promise.resolve(1)
    .then(val => val + 1)
    .then(val => val + 1)
    .then(val => val + 1);
}

// Задание 15: Проверка Promise.resolve
function task15() {
  return Promise.resolve("Value").then(val => val === "Value");
}

// Запуск всех функций
document.addEventListener('DOMContentLoaded', async () => {
  for (let i = 1; i <= 15; i++) {
    const func = window[`task${i}`];
    if (func) {
      try {
        const result = await Promise.resolve(func());
        console.log(`=== Task ${i} ===`, result);
      } catch (error) {
        console.error(`=== Task ${i} ===`, error);
      }
    }
  }
});
