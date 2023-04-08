"use strict";

let isNumber = function (a) {
  return !isNaN(parseFloat(a)) && isFinite(a);
};

let money;

function start() {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
}

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 70000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: money,
  month: 30,

  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );

    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      let number;
      let question;

      question = prompt("Введите обязательную статью расходов:");

      while (!isNumber(number)) {
        number = prompt("Сколько это будет стоить:");
      }

      appData.expenses[question] = number;
    }
  },

  getExpensesMonth: function () {
    let sumExpenses = 0;

    for (let key in appData.expenses) {
      sumExpenses += Number(appData.expenses[key]);
    }

    appData.expensesMonth = sumExpenses;
    return appData.expensesMonth;
  },

  getBudget: function () {
    appData.budgetMonth =
      Number(appData.budget) - Number(appData.expensesMonth);
    appData.budgetDay = Math.floor(appData.budgetMonth / appData.month);
  },

  getTargetMonth: function () {
    if (Math.ceil(appData.mission / appData.budgetMonth) < 0) {
      appData.period = "Цель не будет достигнута";
    } else {
      appData.period =
        "В течение этого времени сумма будет накоплена(месяцы) " +
        Math.ceil(appData.mission / appData.budgetMonth);
    }
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      appData.income = "У вас высокий уровень дохода";
    } else if (600 <= appData.budgetDay && appData.budgetDay < 1200) {
      appData.income = "У вас средний уровень дохода";
    } else if (0 <= appData.budgetDay && appData.budgetDay < 600) {
      appData.income = "У вас низкий уровень дохода";
    } else {
      appData.income = "Что-то пошло не так";
    }
  },
};

console.log(appData);

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log("Расходы за месяц равны: " + appData.expensesMonth);
console.log(appData.period);
console.log(
  "Бюджет на день исходя из месячного накопления равен , " + appData.budgetDay
);

for (let key in appData) {
  if (typeof appData[key] != "function") {
    console.log(
      "Наша прогамма включает в себя данные: " + key + " : " + appData[key]
    );
  } else {
    console.log("Данное свойство содержит в себе функцию");
  }
}
