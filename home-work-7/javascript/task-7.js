"use strict";
//Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
var _a, _b;
if (confirm('Почати?')) {
    const addedRow = parseInt((_a = prompt('Введіть кількість рядків')) !== null && _a !== void 0 ? _a : '');
    const addedCol = parseInt((_b = prompt('Введіть кількість стовпців')) !== null && _b !== void 0 ? _b : '');
    if (!isFinite(addedRow) || !isFinite(addedCol) || addedRow <= 0 || addedCol <= 0)
        throw new Error("Некоретне число");
    function getTable(addedRow, addedCol, message) {
        document.write(`<table border=1px><thead>`);
        for (let row = 1; row <= addedRow; row++) {
            document.write(`<tr>`);
            for (let col = 1; col <= addedCol; col++) {
                document.write(`<td>${message}</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</thead></table>`);
    }
    getTable(addedRow, addedCol, 'Hello!');
}
