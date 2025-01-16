// ------ 1
const year = +prompt('Введите год рождения (например 2000)');
const age = 2025 - year;
console.log(`Ваш возраст: ${age}`);

// ------ 2
const userInput = prompt('Введите строку:');
const number = +userInput;

console.log(`Число ${number} является чётным? - ${number % 2 === 0 ? 'Да' : 'Нет'}`);
console.log(`Число ${number} делится на 10? - ${number % 10 === 0 ? 'Да' : 'Нет'}`);

// ------ 3
const num1 = +prompt('Введите первое число:');
const operator = prompt('Введите оператор (+, -, *, /):');
const num2 = +prompt('Введите второе число:');

let result;

if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else if (operator == '/') {
    result = num1 / num2;
} else {
    console.log('Неверный оператор');
    return;
}

console.log(`Результат: ${result}`);
