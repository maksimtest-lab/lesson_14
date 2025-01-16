// ------ 1
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

// ------ 2
const x = 15;
console.log(`Число ${x} делится ли на 3? - ${x % 3 === 0 ? 'Да' : 'Нет'}`);
console.log(`Число ${x} делится ли на 5? - ${x % 5 === 0 ? 'Да' : 'Нет'}`);
console.log(`Число ${x} является ли одновременно кратным 3 и 5? - ${x % 3 === 0 && x % 5 === 0 ? 'Да' : 'Нет'}`);

// ------ 3
const n = +prompt('Введите число');
let sum2 = 0;
for (let i = 1; i <= n; i++) {
    sum2 += i;
}
console.log(`Сумма всех чисел от 1 до ${n} составляет ${sum2}`);
