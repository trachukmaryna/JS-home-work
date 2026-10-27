"use strict";
//Вивести на екран N абзаців (N вводиться користувачем) за зразком:
var _a;
{
    if (confirm('Почати?')) {
        const numberOfParagraphs = parseInt((_a = prompt('Введіть кількість параграфів')) !== null && _a !== void 0 ? _a : '');
        if (!isFinite(numberOfParagraphs) || numberOfParagraphs < 0)
            throw new Error("Некоректне число");
        else {
            for (let section = 1; section <= numberOfParagraphs; section++) {
                document.write(`<h2>Заголовок ${section}</h2>`);
                for (let paragraph = 1; paragraph <= section; paragraph++) {
                    document.write(`<p>Розділ ${section}, параграф ${paragraph}</p>`);
                }
                document.write(`<hr>`);
            }
        }
    }
    else
        throw new Error("Скасовано");
}
