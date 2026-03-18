// ===== ТЕМА 7: МАССИВЫ =====
// 15 заданий

// Задание 1: Создание массива
function task1() {
  const arr = [1, 2, 3, 4, 5];
  return arr.length;
}

// Задание 2: Доступ к элементу массива
function task2() {
  const arr = ['a', 'b', 'c'];
  return arr[1];
}

// Задание 3: push - добавить элемент в конец
function task3() {
  const arr = [1, 2, 3];
  arr.push(4);
  return arr;
}

// Задание 4: pop - удалить последний элемент
function task4() {
  const arr = [1, 2, 3];
  arr.pop();
  return arr;
}

// Задание 5: unshift - добавить в начало
function task5() {
  const arr = [2, 3];
  arr.unshift(1);
  return arr;
}

// Задание 6: shift - удалить первый элемент
function task6() {
  const arr = [1, 2, 3];
  arr.shift();
  return arr;
}

// Задание 7: indexOf - найти индекс элемента
function task7() {
  const arr = ['a', 'b', 'c', 'b'];
  return arr.indexOf('b');
}

// Задание 8: includes - проверить наличие элемента
function task8() {
  const arr = [1, 2, 3, 4, 5];
  return arr.includes(3);
}

// Задание 9: slice - получить подмассив
function task9() {
  const arr = [1, 2, 3, 4, 5];
  return arr.slice(1, 4);
}

// Задание 10: splice - изменить массив
function task10() {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(2, 1, 99);
  return arr;
}

// Задание 11: concat - объединить массивы
function task11() {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  return arr1.concat(arr2);
}

// Задание 12: join - соединить элементы в строку
function task12() {
  const arr = ['a', 'b', 'c'];
  return arr.join('-');
}

// Задание 13: split - разбить строку в массив
function task13() {
  const str = "a,b,c";
  return str.split(',');
}

// Задание 14: reverse - обратить массив
function task14() {
  const arr = [1, 2, 3];
  arr.reverse();
  return arr;
}

// Задание 15: sort - сортировать массив
function task15() {
  const arr = [3, 1, 4, 1, 5, 9];
  arr.sort((a, b) => a - b);
  return arr;
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
