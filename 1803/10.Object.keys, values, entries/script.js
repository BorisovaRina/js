// ===== ТЕМА 10: DOM МАНИПУЛЯЦИЯ =====
// 15 заданий

// Задание 1: Получить элемент по ID
function task1() {
  const elem = document.getElementById('result');
  return elem ? 'found' : 'not found';
}

// Задание 2: Получить элементы по классу
function task2() {
  const elems = document.getElementsByClassName('item');
  return elems.length;
}

// Задание 3: querySelector
function task3() {
  const elem = document.querySelector('.container');
  return elem ? 'found' : 'not found';
}

// Задание 4: querySelectorAll
function task4() {
  const elems = document.querySelectorAll('p');
  return elems.length;
}

// Задание 5: Изменить текстовое содержимое
function task5() {
  const elem = document.getElementById('result');
  if (elem) elem.textContent = 'Updated';
  return 'Changed';
}

// Задание 6: Изменить HTML содержимое
function task6() {
  const elem = document.getElementById('result');
  if (elem) elem.innerHTML = '<strong>Bold</strong>';
  return 'Changed';
}

// Задание 7: Изменить атрибут
function task7() {
  const elem = document.querySelector('img');
  if (elem) elem.setAttribute('alt', 'Image');
  return 'Set attribute';
}

// Задание 8: Получить атрибут
function task8() {
  const elem = document.querySelector('a');
  return elem ? elem.getAttribute('href') : 'not found';
}

// Задание 9: Добавить класс
function task9() {
  const elem = document.getElementById('result');
  if (elem) elem.classList.add('active');
  return 'Class added';
}

// Задание 10: Удалить класс
function task10() {
  const elem = document.getElementById('result');
  if (elem) elem.classList.remove('active');
  return 'Class removed';
}

// Задание 11: Проверить наличие класса
function task11() {
  const elem = document.getElementById('result');
  return elem ? elem.classList.contains('active') : false;
}

// Задание 12: Изменить стиль
function task12() {
  const elem = document.getElementById('result');
  if (elem) elem.style.color = 'red';
  return 'Style changed';
}

// Задание 13: Создать новый элемент
function task13() {
  const elem = document.createElement('div');
  elem.textContent = 'New Element';
  return elem.textContent;
}

// Задание 14: Добавить элемент в DOM
function task14() {
  const parent = document.getElementById('result');
  if (parent) {
    const child = document.createElement('p');
    child.textContent = 'Child';
    parent.appendChild(child);
  }
  return 'Appended';
}

// Задание 15: Удалить элемент
function task15() {
  const elem = document.querySelector('.temp');
  if (elem) elem.remove();
  return 'Removed';
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
