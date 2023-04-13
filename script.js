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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 70000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: money,
  month: 30,

  asking: function () {
    if (confirm("Есть ли у вас дополнительный заработок?")) {
      let itemIncome = prompt(
        "Какой у вас есть дополнительный заработок?",
        "Таксую"
      );

      while (
        isNumber(itemIncome) ||
        itemIncome.length < 1 ||
        itemIncome.trim() === ""
      ) {
        itemIncome = prompt(
          "Какой у вас есть дополнительный заработок?",
          "Таксую"
        );
      }

      let cashIncome = prompt("Сколько в месяца зарабатываете на этом?", 10000);

      while (!isNumber(cashIncome)) {
        cashIncome = prompt("Сколько в месяца зарабатываете на этом?", 10000);
      }

      appData.income[itemIncome] = cashIncome;
    }

    let data = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );

    let dataArr = data.split(",");

    for (let i = 0; i < dataArr.length; i++) {
      appData.addExpenses.push(dataArr[i]);
    }

    for (let i = 0; i < dataArr.length; i++) {
      appData.addExpenses[i] = appData.addExpenses[i].trim();
      appData.addExpenses[i] =
        appData.addExpenses[i][0].toUpperCase() +
        appData.addExpenses[i].slice(1);
    }

    appData.addExpenses = appData.addExpenses.join(", ");

    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    for (let i = 0; i < 2; i++) {
      let number;
      let question = prompt("Введите обязательную статью расходов:");

      while (
        isNumber(question) ||
        question.length < 1 ||
        question.trim() === ""
      ) {
        question = prompt("Введите обязательную статью расходов:");
      }

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
      appData.period = Math.ceil(appData.mission / appData.budgetMonth);
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

  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = prompt("Какой годовой процент?", "10");

      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt("Какой годовой процент?", "10");
      }

      appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);

      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
      }
    }
  },

  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

console.log(appData);

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log("Расходы за месяц равны: " + appData.expensesMonth);
console.log(
  "В течении этого времени будет накоплена сумма (месяцы) " + appData.period
);
console.log(
  "Бюджет на день исходя из месячного накопления равен , " + appData.budgetDay
);

for (let key in appData) {
  if (typeof appData[key] !== "function") {
    console.log(
      "Наша прогамма включает в себя данные: " + key + " : " + appData[key]
    );
  } else {
    console.log("Данное свойство содержит в себе функцию");
  }
}

appData.getInfoDeposit();
console.log(
  appData.percentDeposit,
  appData.moneyDeposit,
  appData.period,
  appData.calcSavedMoney()
);
console.log(appData.addExpenses);
