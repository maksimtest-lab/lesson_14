// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');
const num1 = +parseInt(prompt('Введите первое число'));
const num2 = +parseInt(prompt('Введите второе число'));

const sum = num1 + num2;
const diff = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const mod = num1 % num2;
const pow = Math.pow(num1, num2);

console.log(`Сумма: ${sum}`);
console.log(`Разность: ${diff}`);
console.log(`Произведение: ${mult}`);
console.log(`Частное: ${div}`);
console.log(`Остаток от деления: ${mod}`);
console.log(`Результат возведения в степень: ${pow}`);
