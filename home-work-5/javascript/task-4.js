"use strict";
var _a;
//Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.
{
    if (confirm('Почати?')) {
        const numberOfNumbers = parseInt((_a = prompt('Введіть кількість чисел')) !== null && _a !== void 0 ? _a : '');
        const min = 1;
        const max = 100;
        if (!isFinite(numberOfNumbers) || numberOfNumbers < 0)
            throw new Error("Некоректне число");
        else {
            document.write(`<ul>`);
            for (let i = 0; i < numberOfNumbers; i++) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                document.write(`<li>${randomNumber}</li>`);
            }
            document.write(`</ul>`);
        }
    }
    else
        throw new Error("Скасовано");
}
