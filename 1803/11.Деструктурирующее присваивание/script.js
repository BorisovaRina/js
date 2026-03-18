// ===== ТЕМА 11: СОБЫТИЯ (EVENTS) =====
// 15 заданий

// Задание 1: addEventListener
function task1() {
  const elem = document.getElementById('button');
  if (elem) {
    elem.addEventListener('click', () => {
      console.log('Clicked');
    });
  }
  return 'Event listener added';
}

// Задание 2: removeEventListener
function task2() {
  const handler = () => console.log('Click');
  const elem = document.getElementById('button');
  if (elem) {
    elem.removeEventListener('click', handler);
  }
  return 'Event listener removed';
}

// Задание 3: Click event
function task3() {
  const elem = document.getElementById('button');
  if (elem) {
    elem.onclick = function() {
      console.log('Button clicked');
    };
  }
  return 'Click handler set';
}

// Задание 4: Mouseover event
function task4() {
  const elem = document.getElementById('box');
  if (elem) {
    elem.addEventListener('mouseover', () => {
      elem.style.backgroundColor = 'red';
    });
  }
  return 'Mouseover handler added';
}

// Задание 5: Mouseout event
function task5() {
  const elem = document.getElementById('box');
  if (elem) {
    elem.addEventListener('mouseout', () => {
      elem.style.backgroundColor = 'white';
    });
  }
  return 'Mouseout handler added';
}

// Задание 6: Input event
function task6() {
  const input = document.querySelector('input');
  if (input) {
    input.addEventListener('input', (e) => {
      console.log(e.target.value);
    });
  }
  return 'Input handler added';
}

// Задание 7: Change event
function task7() {
  const select = document.querySelector('select');
  if (select) {
    select.addEventListener('change', (e) => {
      console.log(e.target.value);
    });
  }
  return 'Change handler added';
}

// Задание 8: Focus event
function task8() {
  const input = document.querySelector('input');
  if (input) {
    input.addEventListener('focus', () => {
      console.log('Input focused');
    });
  }
  return 'Focus handler added';
}

// Задание 9: Blur event
function task9() {
  const input = document.querySelector('input');
  if (input) {
    input.addEventListener('blur', () => {
      console.log('Input blurred');
    });
  }
  return 'Blur handler added';
}

// Задание 10: Keydown event
function task10() {
  const input = document.querySelector('input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      console.log('Key: ' + e.key);
    });
  }
  return 'Keydown handler added';
}

// Задание 11: Submit event
function task11() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submitted');
    });
  }
  return 'Submit handler added';
}

// Задание 12: Получить event.target
function task12() {
  const elem = document.getElementById('button');
  if (elem) {
    elem.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }
  return 'Event target handler added';
}

// Задание 13: Event bubbling
function task13() {
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');
  if (parent && child) {
    parent.addEventListener('click', () => {
      console.log('Parent clicked');
    });
    child.addEventListener('click', () => {
      console.log('Child clicked');
    });
  }
  return 'Bubbling handlers added';
}

// Задание 14: stopPropagation
function task14() {
  const elem = document.getElementById('button');
  if (elem) {
    elem.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Event stopped');
    });
  }
  return 'stopPropagation handler added';
}

// Задание 15: preventDefault
function task15() {
  const link = document.querySelector('a');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Default action prevented');
    });
  }
  return 'preventDefault handler added';
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
