"use strict";
//Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
{
    if (confirm('Почати?')) {
        for (let table = 1; table <= 3; table++) {
            document.write(`<table style="display:inline-block; margin: 20px">`);
            for (let row = 1; row <= 3; row++) {
                document.write(`<tr>`);
                for (let col = 1; col <= 3; col++) {
                    const number = (table - 1) * 9 + (row - 1) * 3 + col;
                    document.write(`<td style="border: 2px solid black; padding: 5px;">${number}</td>`);
                }
                document.write(`</tr>`);
            }
            document.write(`</table>`);
        }
    }
    else
        throw new Error("Скасовано");
}
