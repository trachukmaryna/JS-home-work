"use strict";
//Інвестор  вклав  S тис. грн на 20 років під 20% річних,
// податок складає 5% від суми прибутку.
// Визначити за допомогою циклів суму, яку він одержить.
var _a;
{
    if (confirm('Почати?')) {
        const depositTerm = 20;
        const percentagePerAnnum = 20;
        const tax = 5;
        const deposit = parseFloat((_a = prompt('Введіть суму вкладу, грн')) !== null && _a !== void 0 ? _a : '');
        let currentAmount = deposit;
        if (!isFinite(deposit) || deposit <= 0)
            throw new Error("Некоректна сума");
        for (let year = 1; year <= depositTerm; year++) {
            currentAmount += (currentAmount * percentagePerAnnum) / 100;
        }
        const profit = currentAmount - deposit; // прибуток
        const taxAmount = (profit * tax) / 100; // 5% від суми прибутку
        const receivedAmount = currentAmount - taxAmount;
        document.write(`Отримана сума, яку одержить інвестор після оподаткування складає ${receivedAmount.toFixed(2)} тис. грн`);
    }
}
