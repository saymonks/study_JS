'use strict';
// lesson03
let mission = 70000;
let money = prompt('Ваш месячный доход?');
console.log('Месячный доход равен ', money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возможные расходы: ', addExpenses.split(' '));
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Во сколько это обойдется?');

// Бюджет на месяц budgetmoth = доходы - расходы;
const getExpensesMonth = function (a, b) {
  return Number(a) + Number(b);
}

let expenses = getExpensesMonth(amount1, amount2);
console.log('Расходы за месяц равны: ', expenses);

const getAccumulatedMonth = function (a, b) {
  return Number(a) - Number(b);
}

let accumulatedMonth = getAccumulatedMonth(money, expenses);

const getTargetMonth = function (a, b) {
  return Math.ceil(a / b);
}

let targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log('В течение этого времени сумма будет накоплена(месяцы) ', targetMonth);

const getBudgetDay = function (a, b) {
  return Math.floor(a / b); 
}

let budgetDay = getBudgetDay (accumulatedMonth, 30);
console.log('Бюджет на день исходя из месячного накопления равен , ', budgetDay);
const  getStatusIncome = function (a) {
  if (a >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if (600 <= a && a < 1200) {
    return 'У вас средний уровень дохода';
  } else if (0 <= a && a < 600) {
    return 'У вас низкий уровень дохода';
  } else {
    return 'Что-то пошло не так';
}
}
let statusIncome = getStatusIncome (budgetDay);
console.log(statusIncome);

const getSmallLetter = function(a) {
  return 'Слово ' + a.toLowerCase(); 
}

let word = getSmallLetter('КОСтянЧик');
console.log(word);

function showTypeOf(a) {
  return typeof a;
} 
console.log(showTypeOf());

function getLenthString(a) {
  return a.length;
}
console.log(getLenthString('Привет бро'));


// 1/3 усложненного задания (18.03.23 time 21:00)
// let namePerson = 'Артем';
// namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');