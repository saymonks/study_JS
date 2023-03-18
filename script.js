'use strict';
let money = 41235;
let income = 'Фриланс';
let addExpenses = 'Продукты, Проезд, Вкусняшки';
let deposit = true;
let mission = 70000;
let period = 5;
// lesson02
// alert ('Hello,world!');
// console.log(money);
// console.log(income);
// console.log(2 == 2);
// console.log(addExpenses.length);
// console.log('Период равен', period ,'месяцев'); (переписать так чтобы была 1 строка)
// console.log('Цель заработать', mission ,'рублей'); (переписать так чтобы была 1 строка)
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));
// let budgetDay = money/30;
// console.log (budgetDay);

// lesson03
money = prompt('Ваш месячный доход?');
console.log('Месячный доход равен ', money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возможные расходы: ', addExpenses);
deposit = confirm('Есть ли у вас депозит в банке?');
console.log('Депозит в банке', deposit);
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Во сколько это обойдется?');
// Бюджет на месяц budgetmoth = доходы - расходы;
let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц составляет: ', budgetMonth);
period = mission / budgetMonth; 
period = Number(period);
console.log('Время за которое накопится сумма (месяцы): ', Math.ceil(period));
let budgetDay = budgetMonth / 30;
console.log ('Бюджет на день составляет: ', Math.floor(budgetDay));
if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
}
else if (600 <= budgetDay) {
  console.log('У вас средний уровень дохода');
}
if (budgetDay < 600) {
  console.log('У вас низкий доход');
}
if (budgetDay = 0) {
  console.log('У вас низкий доход');
}
if (budgetDay < 0) {
  console.log('Что-то пошло не так')
}

