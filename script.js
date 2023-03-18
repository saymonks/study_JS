'use strict';
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
let mission = 70000;
let money = prompt('Ваш месячный доход?');
console.log('Месячный доход равен ', money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возможные расходы: ', addExpenses);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('Депозит в банке', deposit);
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Во сколько это обойдется?');
// Бюджет на месяц budgetmoth = доходы - расходы;
let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц составляет: ', budgetMonth);
let period = Math.ceil(mission / budgetMonth); 
console.log('Время за которое накопится сумма (месяцы): ', period);
let budgetDay = Math.floor(budgetMonth / 30);
console.log ('Бюджет на день составляет: ', budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (0 <= budgetDay && budgetDay < 600) {
  console.log('У вас низкий уровень дохода');
} else {
  console.log('Что-то пошло не так');
}
// 1/3 усложненного задания (18.03.23 time 21:00)
let namePerson = 'питух';
namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
