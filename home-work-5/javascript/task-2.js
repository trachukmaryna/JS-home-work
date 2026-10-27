"use strict";
// Вивести на екран номери місяців весни і літа (від 3 до 8)
{
    if (confirm('Почати?')) {
        for (let monthNumber = 3; monthNumber <= 8; monthNumber++) {
            document.write(`${monthNumber} <br>`);
        }
    }
    else {
        throw new Error("Скасовано");
    }
}
