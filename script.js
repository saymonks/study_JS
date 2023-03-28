'use strict';

let isNumber = function(a) {
  return !isNaN(parseFloat(a)) && isFinite(a);
};

let mission = 70000;
let money;

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('Возможные расходы: ', addExpenses.split(' '));
let deposit = confirm('Есть ли у вас депозит в банке?');

let start = function() {
  do {
    money = prompt('Ваш месячный доход?'); 
  }
  while (!isNumber(money));
};

start();

let expenses = [];
let getExpensesMonth = function() {
  let sumNumbers = 0;
  for (let i = 0; i < 2; i++) {
    let number;
    expenses[i] = prompt('Введите обязательную статью расходов:');
    while (!isNumber(number)) {
      number = prompt('Сколько это будет стоить:');  
    };
    let newNum = Number(number);
    sumNumbers = sumNumbers + newNum;
  };
  return sumNumbers;
 };  

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц равны: ' + expensesAmount);

const getAccumulatedMonth = function (a, b) {
  return Number(a) - Number(b);
}

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

const getTargetMonth = function (a, b) {
  if ((Math.ceil(a / b)) < 0) {
    return 'Цель не будет достигнута';
  } else {
    return 'В течение этого времени сумма будет накоплена(месяцы) ' + Math.ceil(a / b);
  }
};

let targetMonth = getTargetMonth(money, accumulatedMonth);
console.log(targetMonth);

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
