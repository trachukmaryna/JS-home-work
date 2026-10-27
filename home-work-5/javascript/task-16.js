"use strict";
//Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 
var _a, _b, _c, _d, _e;
{
    if (confirm('Почнемо?')) {
        const N = parseInt((_a = prompt('Введіть кількість рядків поля')) !== null && _a !== void 0 ? _a : '');
        const M = parseInt((_b = prompt('Введіть кількість стовпців поля')) !== null && _b !== void 0 ? _b : '');
        const K = parseInt((_c = prompt('Введіть кількість снарядів')) !== null && _c !== void 0 ? _c : '');
        let shotCounter = 0;
        if (!isFinite(N) || !isFinite(M) || !isFinite(K) || N <= 0 || M <= 0 || K <= 0)
            throw new Error("Некоректні дані");
        else {
            const randomRow = Math.floor(Math.random() * (N - 1 + 1)) + 1;
            const randomCol = Math.floor(Math.random() * (M - 1 + 1)) + 1;
            for (let shot = 1; shot <= K; shot++) {
                const shotRow = parseInt((_d = prompt('Введіть рядок для пострілу')) !== null && _d !== void 0 ? _d : '');
                const shotCol = parseInt((_e = prompt('Введіть стовпець для пострілу')) !== null && _e !== void 0 ? _e : '');
                shotCounter++;
                const shotsRemaining = K - shotCounter;
                if (randomRow === shotRow && randomCol === shotCol) {
                    alert(`Влучив! Корабель знищено!`);
                    break;
                }
                else if (shotsRemaining > 0)
                    alert(`Не влучив. Залишилось cнарядів ${shotsRemaining}`);
                else
                    alert(`Програв!Спробуй ще раз!Кораблик був в рядку ${randomRow} та в стовпці ${randomCol}`);
            }
        }
    }
    else
        throw new Error("Скасовано");
}
