let money = 41235;
let income = 'Фриланс';
let addExpenses = 'Продукты, Проезд, Вкусняшки';
let deposit = true;
let mission = 70000;
let period = 5;
alert ('Hello,world!');
console.log(money);
console.log(income);
console.log(2 == 2);
console.log(addExpenses.length);
console.log('Период равен', period ,'месяцев');
console.log('Цель заработать', mission ,'рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = 15000/30;
console.log (budgetDay);
// Усложненное задание
let num = 266219;
let array = ('' + num).split('');
console.log(array.map(Number));
let res = array.reduce((acc, rec) => acc * rec);
console.log(res);
let degree = res ** 3;
console.log(degree);
let degreeString = degree.toString();
console.log(degreeString.substring(0,2));

