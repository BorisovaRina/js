// ===== 100 JAVASCRIPT ЗАДАНИЙ - ПОЛНЫЕ РЕШЕНИЯ =====

// КАТЕГОРИЯ 1: Базовые вычисления (1-10)

function task1(a, b) { return a + b; }
function task2(a, b) { return a - b; }
function task3(a, b) { return a * b; }
function task4(a, b) { return a / b; }
function task5(a, b) { return a % b; }
function task6(a, b) { return Math.pow(a, b); }
function task7(a) { return Math.abs(a); }
function task8(a) { return Math.sqrt(a); }
function task9(a) { return Math.ceil(a); }
function task10(a) { return Math.floor(a); }

// КАТЕГОРИЯ 2: Строки (11-30)

function task11(str) { return str.length; }
function task12(str) { return str.toUpperCase(); }
function task13(str) { return str.toLowerCase(); }
function task14(str, i) { return str[i]; }
function task15(str, start, end) { return str.substring(start, end); }
function task16(str, sub) { return str.indexOf(sub); }
function task17(str, old, newStr) { return str.replace(old, newStr); }
function task18(str, sep) { return str.split(sep); }
function task19(arr, sep) { return arr.join(sep); }
function task20(str, sub) { return str.includes(sub); }

// КАТЕГОРИЯ 3: Массивы (21-40)

function task21(arr) { return arr.length; }
function task22(arr, i) { return arr[i]; }
function task23(arr, el) { arr.push(el); return arr; }
function task24(arr) { arr.pop(); return arr; }
function task25(arr, el) { arr.unshift(el); return arr; }
function task26(arr) { arr.shift(); return arr; }
function task27(arr, el) { return arr.indexOf(el); }
function task28(arr, el) { return arr.includes(el); }
function task29(arr, start, end) { return arr.slice(start, end); }
function task30(arr, start, count, ...items) { arr.splice(start, count, ...items); return arr; }

// КАТЕГОРИЯ 4: Объекты (31-50)

function task31() { return { name: 'John', age: 30 }; }
function task32(obj, key) { return obj[key]; }
function task33(obj, key, val) { obj[key] = val; return obj; }
function task34(obj, key) { delete obj[key]; return obj; }
function task35(obj) { return Object.keys(obj); }
function task36(obj) { return Object.values(obj); }
function task37(obj) { return Object.entries(obj); }
function task38(obj, key) { return key in obj; }
function task39(obj1, obj2) { return Object.assign({}, obj1, obj2); }
function task40(obj) { return { ...obj }; }

// КАТЕГОРИЯ 5: Логика (41-60)

function task41(x) { return x > 5 ? 'больше' : 'не больше'; }
function task42(a, b) { if (a > b) return 'a больше'; if (b > a) return 'b больше'; return 'равны'; }
function task43(n) { return n % 2 === 0 ? 'четное' : 'нечетное'; }
function task44(n) { return n % 2 !== 0 ? 'нечетное' : 'четное'; }
function task45(a, b) { return a && b; }
function task46(a, b) { return a || b; }
function task47(a) { return !a; }
function task48(n) { return n > 0 ? 'положительное' : n < 0 ? 'отрицательное' : 'нуль'; }
function task49(n, a, b) { return n >= a && n <= b ? 'в диапазоне' : 'не в диапазоне'; }
function task50(day) { switch (day) { case 1: return 'Пн'; case 2: return 'Вт'; default: return 'Др'; } }

// КАТЕГОРИЯ 6: Циклы (51-70)

function task51(n) { let sum = 0; for (let i = 1; i <= n; i++) sum += i; return sum; }
function task52(arr) { let result = []; for (let i = 0; i < arr.length; i++) result.push(arr[i] * 2); return result; }
function task53(n) { let i = 0, sum = 0; while (i < n) { sum += i; i++; } return sum; }
function task54() { let i = 0, sum = 0; do { sum += i; i++; } while (i < 5); return sum; }
function task55(arr) { let sum = 0; arr.forEach(x => sum += x); return sum; }
function task56(arr) { return arr.map(x => x * 2); }
function task57(arr) { return arr.filter(x => x > 2); }
function task58(arr) { return arr.reduce((a, b) => a + b, 0); }
function task59(arr, val) { return arr.find(x => x === val); }
function task60(arr) { return arr.some(x => x > 3); }

// КАТЕГОРИЯ 7: Функции (61-80)

function task61(x) { return x * 2; }
function task62(a, b, c) { return a + b + c; }
function task63() { const f = x => x * 3; return f(4); }
function task64(a = 10, b = 20) { return a + b; }
function task65(...nums) { return nums.reduce((a, b) => a + b, 0); }
function task66(a, b) { return [a, b]; }
function task67(name, age) { return { name, age }; }
function task68(x) { function inner(y) { return x + y; } return inner(5); }
function task69(n) { return n <= 1 ? 1 : n * task69(n - 1); }
function task70(fn, x) { return fn(x); }

// КАТЕГОРИЯ 8: Дополнительные (71-100)

function task71(val) { return typeof val; }
function task72(val) { return Array.isArray(val); }
function task73(val) { return val === null; }
function task74(val) { return val === undefined; }
function task75(val) { return val instanceof Array; }
function task76(str) { return Number(str); }
function task77(num) { return String(num); }
function task78(val) { return Boolean(val); }
function task79(str) { return parseInt(str); }
function task80(str) { return parseFloat(str); }

function task81(val) { return isNaN(val); }
function task82(val) { return isFinite(val); }
function task83(arr) { return Math.min(...arr); }
function task84(arr) { return Math.max(...arr); }
function task85() { return typeof Math.random() === 'number'; }
function task86(str) { return Array.from(str); }
function task87(arr) { return [...arr, 4, 5]; }
function task88() { const [a, b] = [1, 2]; return a + b; }
function task89() { const { name } = { name: 'John', age: 30 }; return name; }
function task90() { const [a, ...rest] = [1, 2, 3]; return rest; }

function task91(a, b) { return a + b; }
function task92(name) { return `Hello, ${name}!`; }
function task93(str) { return str.padStart(5, '0'); }
function task94(str) { return str.padEnd(5, '0'); }
function task95(str, n) { return str.repeat(n); }
function task96(arr) { return [...arr].sort((a, b) => a - b); }
function task97(arr) { return [...arr].reverse(); }
function task98(arr) { return arr.every(x => x > 0); }
function task99(arr) { return arr.flat(); }
function task100(arr) { return arr.flatMap(x => [x, x * 2]); }

// Экспорт функций для использования в HTML
if (typeof window !== 'undefined') {
  window.allTasks = {
    task1, task2, task3, task4, task5, task6, task7, task8, task9, task10,
    task11, task12, task13, task14, task15, task16, task17, task18, task19, task20,
    task21, task22, task23, task24, task25, task26, task27, task28, task29, task30,
    task31, task32, task33, task34, task35, task36, task37, task38, task39, task40,
    task41, task42, task43, task44, task45, task46, task47, task48, task49, task50,
    task51, task52, task53, task54, task55, task56, task57, task58, task59, task60,
    task61, task62, task63, task64, task65, task66, task67, task68, task69, task70,
    task71, task72, task73, task74, task75, task76, task77, task78, task79, task80,
    task81, task82, task83, task84, task85, task86, task87, task88, task89, task90,
    task91, task92, task93, task94, task95, task96, task97, task98, task99, task100
  };
}