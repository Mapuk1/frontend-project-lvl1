const arr = [12, 123, 123]
const arr2 = [...arr];
const answer = arr2.splice(1, 1, '..');
const re = /,/gi;
const str = arr2.toString();
const newStr = str.replace(',', ' ');

console.log(arr);
console.log(arr2);
console.log(answer);
console.log(str);
console.log(newStr);

