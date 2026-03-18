// ===== 200 JAVASCRIPT ЗАДАНИЙ - ПОЛНЫЕ РЕШЕНИЯ =====

// КАТЕГОРИЯ 1: Базовые операции (1-20)
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
function task11(a) { return Math.round(a); }
function task12(a) { return Math.trunc(a); }
function task13(arr) { return arr.length; }
function task14(str) { return str.length; }
function task15(a, b) { return Math.max(a, b); }
function task16(a, b) { return Math.min(a, b); }
function task17(arr) { return arr[0]; }
function task18(arr) { return arr[arr.length - 1]; }
function task19(a) { return -a; }
function task20(a) { return 1 / a; }

// КАТЕГОРИЯ 2: Строки (21-50)
function task21(str) { return str.toUpperCase(); }
function task22(str) { return str.toLowerCase(); }
function task23(str, i) { return str.charAt(i); }
function task24(str, i) { return str[i]; }
function task25(str, a, b) { return str.slice(a, b); }
function task26(str, a, b) { return str.substring(a, b); }
function task27(str, sub) { return str.indexOf(sub); }
function task28(str, sub) { return str.lastIndexOf(sub); }
function task29(str, sub) { return str.includes(sub); }
function task30(str, sub) { return str.startsWith(sub); }
function task31(str, sub) { return str.endsWith(sub); }
function task32(str) { return str.trim(); }
function task33(str) { return str.trimStart(); }
function task34(str) { return str.trimEnd(); }
function task35(str, old, newStr) { return str.replace(old, newStr); }
function task36(str, old, newStr) { return str.replaceAll(old, newStr); }
function task37(str, sep) { return str.split(sep); }
function task38(arr, sep) { return arr.join(sep); }
function task39(str, n) { return str.repeat(n); }
function task40(str) { return str.padStart(10, '0'); }
function task41(str) { return str.padEnd(10, '0'); }
function task42(str) { return str.charCodeAt(0); }
function task43(code) { return String.fromCharCode(code); }
function task44(str, a, b) { return str.substring(a, b); }
function task45(a, b) { return a + b; }
function task46(str) { return `Hello, ${str}!`; }
function task47(a, b, c) { return `${a} + ${b} = ${c}`; }
function task48(str) { return str.concat(' World'); }
function task49(str, n) { return str.charAt(n); }
function task50(str) { return str.length > 0; }

// КАТЕГОРИЯ 3: Массивы (51-100)
function task51(arr) { return arr.length; }
function task52(arr, el) { return arr.push(el); }
function task53(arr) { return arr.pop(); }
function task54(arr, el) { return arr.unshift(el); }
function task55(arr) { return arr.shift(); }
function task56(arr, a, b) { return arr.slice(a, b); }
function task57(arr, a, count, ...items) { arr.splice(a, count, ...items); return arr; }
function task58(arr) { return arr.reverse(); }
function task59(arr) { return [...arr].sort((a, b) => a - b); }
function task60(arr, el) { return arr.indexOf(el); }
function task61(arr, el) { return arr.lastIndexOf(el); }
function task62(arr, el) { return arr.includes(el); }
function task63(arr, fn) { return arr.map(fn); }
function task64(arr, fn) { return arr.filter(fn); }
function task65(arr, fn) { return arr.find(fn); }
function task66(arr, fn) { return arr.findIndex(fn); }
function task67(arr, fn, init) { return arr.reduce(fn, init); }
function task68(arr, fn, init) { return arr.reduceRight(fn, init); }
function task69(arr, fn) { return arr.some(fn); }
function task70(arr, fn) { return arr.every(fn); }
function task71(arr, fn) { arr.forEach(fn); return 'done'; }
function task72(arr1, arr2) { return arr1.concat(arr2); }
function task73(arr) { return arr.flat(); }
function task74(arr, fn) { return arr.flatMap(fn); }
function task75(arr) { return [...new Set(arr)]; }
function task76(arr1, arr2) { return arr1.some(el => arr2.includes(el)); }
function task77(arr1, arr2) { return arr1.filter(el => arr2.includes(el)); }
function task78(arr1, arr2) { return arr1.filter(el => !arr2.includes(el)); }
function task79(arr, sep) { return arr.join(sep); }
function task80(str, sep) { return str.split(sep); }
function task81(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function task82(arr) { return arr.length > 0; }
function task83(arr) { return arr.length === 0; }
function task84(arr, el) { return arr.fill(el); }
function task85(arr, start, end) { return arr.fill(0, start, end); }
function task86(arr) { return [...arr]; }
function task87(arr) { return Array.from(arr); }
function task88(arr) { return JSON.parse(JSON.stringify(arr)); }
function task89(arr, times) { return Array(times).fill(arr).flat(); }
function task90(arr) { return arr.sort(); }
function task91(arr, fn) { return arr.findIndex(fn); }
function task92(n) { return Array.from({length: n}, (_, i) => i + 1); }
function task93(arr) { return arr.length; }
function task94(arr) { let sum = 0; arr.forEach(el => sum += el); return sum; }
function task95(arr) { return Math.max(...arr); }
function task96(arr) { return Math.min(...arr); }
function task97(arr) { return arr.slice(); }
function task98(arr) { return arr.concat(); }
function task99(arr) { return Array.isArray(arr); }
function task100(arr1, arr2) { return JSON.stringify(arr1) === JSON.stringify(arr2); }

// КАТЕГОРИЯ 4: Объекты (101-150)
function task101() { return {}; }
function task102(obj, key) { return obj[key]; }
function task103(obj, key, val) { obj[key] = val; return obj; }
function task104(obj, key) { delete obj[key]; return obj; }
function task105(obj) { return Object.keys(obj); }
function task106(obj) { return Object.values(obj); }
function task107(obj) { return Object.entries(obj); }
function task108(obj, key) { return key in obj; }
function task109(obj) { return obj.hasOwnProperty; }
function task110(obj) { return Object.assign({}, obj); }
function task111(obj) { return {...obj}; }
function task112(obj1, obj2) { return Object.assign({}, obj1, obj2); }
function task113(obj1, obj2) { return {...obj1, ...obj2}; }
function task114(obj, key) { return Object.getOwnPropertyDescriptor(obj, key); }
function task115(obj) { return Object.getOwnPropertyNames(obj); }
function task116(obj) { return Object.freeze(obj); }
function task117(obj) { return Object.seal(obj); }
function task118(obj) { return Object.isFrozen(obj); }
function task119(obj) { return Object.isSealed(obj); }
function task120(key, val) { return {[key]: val}; }
function task121(obj) { return Object.create(obj); }
function task122(obj) { return JSON.stringify(obj); }
function task123(str) { return JSON.parse(str); }
function task124(obj) { return Object.keys(obj).length; }
function task125() { return {name: 'John', age: 30}; }
function task126(obj) { for (let key in obj) { } return 'done'; }
function task127(obj) { return Object.entries(obj).map(([k, v]) => ({[k]: v})); }
function task128(obj, fn) { return Object.entries(obj).map(([k, v]) => fn(k, v)); }
function task129(obj) { const o = {}; for (let key in obj) o[key] = obj[key]; return o; }
function task130(obj) { return Object.keys(obj).every(k => obj[k]); }
function task131(obj) { return Object.values(obj).some(v => !v); }
function task132(obj, target) { for (let key in obj) if (obj[key] === target) return key; }
function task133(obj) { return Object.values(obj); }
function task134(arr) { return Object.fromEntries(arr); }
function task135(obj) { return new Map(Object.entries(obj)); }
function task136(map) { return Object.fromEntries(map); }
function task137(obj) { return Object.keys(obj).sort(); }
function task138(obj, fn) { return Object.entries(obj).filter(([k,v]) => fn(k,v)); }
function task139(obj) { return Object.getOwnPropertyNames(obj).length; }
function task140(obj1, obj2) { return JSON.stringify(obj1) === JSON.stringify(obj2); }
function task141(obj) { return typeof obj === 'object' && obj !== null; }
function task142(obj) { return obj.constructor.name; }
function task143(obj) { return Object.prototype.toString.call(obj); }
function task144(obj, key, val) { return {...obj, [key]: val}; }
function task145(obj, ...keys) { const o = {}; keys.forEach(k => o[k] = obj[k]); return o; }
function task146(obj, ...keys) { const o = {...obj}; keys.forEach(k => delete o[k]); return o; }
function task147(obj, fn) { return Object.entries(obj).map(([k,v]) => ({key: k, value: fn(v)})); }
function task148(obj, fn) { return Object.fromEntries(Object.entries(obj).map(([k,v]) => [k, fn(v)])); }
function task149(obj) { return Object.entries(obj).reduce((a, [k,v]) => a + v, 0); }
function task150(obj) { return Object.entries(obj).map(([k,v]) => `${k}: ${v}`).join(', '); }

// КАТЕГОРИЯ 5: Функции (151-200)
function task151(x) { return x * 2; }
function task152(a, b) { return a + b; }
function task153(a, b, c) { return a + b + c; }
function task154() { return 42; }
function task155(x) { return x; }
function task156() { return undefined; }
function task157() { return null; }
function task158(x) { return [x]; }
function task159(x, y) { return {x, y}; }
function task160(x) { return x > 0 ? 'positive' : 'negative'; }
function task161(x) { return x % 2 === 0 ? 'even' : 'odd'; }
function task162(a, b) { return a > b ? a : b; }
function task163(a, b) { return a < b ? a : b; }
function task164(...args) { return args.length; }
function task165(...args) { return args.reduce((a, b) => a + b, 0); }
function task166(...args) { return args; }
function task167(fn, x) { return fn(x); }
function task168(fn, x, y) { return fn(x, y); }
function task169(fn) { return function(x) { return fn(x) * 2; }; }
function task170(x) { return function(y) { return x + y; }; }
function task171(fn1, fn2) { return function(x) { return fn2(fn1(x)); }; }
function task172(fn, n) { return function(...args) { for (let i = 0; i < n; i++) fn(...args); }; }
function task173(fn) { let called = false; return function(...args) { if (!called) { called = true; return fn(...args); } }; }
function task174(fn, delay) { return function(...args) { setTimeout(() => fn(...args), delay); }; }
function task175(fn, n) { let calls = 0; return function(...args) { if (calls++ < n) return fn(...args); }; }
function task176(fn) { return function(...args) { return !fn(...args); }; }
function task177(fn1, fn2) { return function(x) { return fn1(x) && fn2(x); }; }
function task178(fn1, fn2) { return function(x) { return fn1(x) || fn2(x); }; }
function task179(fns) { return fns.map((fn, i) => function(...args) { return fn(...args); }); }
function task180(fns) { return fns.reduce((a, b) => function(x) { return b(a(x)); }); }
function task181(x) { return x * 2; }
function task182(x) { return Math.sqrt(x); }
function task183(x) { return x ** 2; }
function task184(x) { return x ** 3; }
function task185(x) { return 1 / x; }
function task186(x) { return -x; }
function task187(x) { return Math.abs(x); }
function task188(x) { return Math.floor(x); }
function task189(x) { return Math.ceil(x); }
function task190(x) { return Math.round(x); }
function task191(x, y) { return x > y ? x : y; }
function task192(x, y) { return x < y ? x : y; }
function task193(a, b, c) { return (a + b + c) / 3; }
function task194(n) { return n <= 1 ? 1 : n * task194(n - 1); }
function task195(n) { return n <= 0 ? 0 : n + task195(n - 1); }
function task196(n) { return n <= 1 ? n : task196(n - 1) + task196(n - 2); }
function task197(n) { return n === 0 ? 1 : n * 2; }
function task198(n) { return n * (n + 1) / 2; }
function task199(a, b) { return Math.gcd ? Math.gcd(a, b) : a === 0 ? b : task199(b % a, a); }
function task200(a, b) { const gcd = Math.gcd ? Math.gcd(a, b) : a === 0 ? b : task200(b % a, a); return (a * b) / gcd; }

// Экспорт функций для использования в HTML
if (typeof window !== 'undefined') {
  window.allTasks = {};
  for (let i = 1; i <= 200; i++) {
    window.allTasks[`task${i}`] = window[`task${i}`];
  }
}
