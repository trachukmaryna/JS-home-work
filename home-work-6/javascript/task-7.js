"use strict";
// Інвестор вклав S тис. грн на 20 років під 20% річних.
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).
var _a;
{
    if (confirm('Почати?')) {
        const depositTerm = 20;
        const percentagePerAnnum = 20;
        const deposit = parseFloat((_a = prompt('Введіть суму вкладу, грн')) !== null && _a !== void 0 ? _a : '');
        let currentAmount = deposit;
        if (!isFinite(deposit) || deposit <= 0)
            throw new Error("Некоректна сума");
        for (let year = 1; year <= depositTerm; year++) {
            currentAmount += (currentAmount * percentagePerAnnum) / 100;
        }
        document.write(`Отримана сума, яку одержить інвестор без оподаткування складає ${currentAmount.toFixed(2)} тис. грн`);
    }
}
