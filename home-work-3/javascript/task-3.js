"use strict";
var _a, _b;
const min = 1;
const max = 5;
const numberOfAttempts = 2;
let enteredNumber = parseInt((_a = prompt("Введіть число")) !== null && _a !== void 0 ? _a : "");
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
let count = 0;
if (!isFinite(enteredNumber) || enteredNumber < min || enteredNumber > max)
    throw new Error("Ввели некоректне число !");
else {
    if (enteredNumber === randomInRange)
        alert(`Ви вгадали число! Вітаємо!`);
    else {
        count++;
        const odds = numberOfAttempts - count;
        alert(`Ви не вгадали число! Залишилось кількість спроб: ${odds} `);
        enteredNumber = parseInt((_b = prompt("Введіть число")) !== null && _b !== void 0 ? _b : "");
        if (!isFinite(enteredNumber) || enteredNumber < min || enteredNumber > max)
            throw new Error("Ввели некоректне число !");
        else {
            if (enteredNumber === randomInRange)
                alert(`Ви вгадали число! Вітаємо!`);
            else
                alert(`Ви не вгадали число! Спроби закінчились! Загадане число ${randomInRange}`);
        }
    }
}
