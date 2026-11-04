"use strict";
//Дано покази температур (довільна кількість).
//Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
var _a;
if (confirm('Почати?')) {
    const enteredTemperatureCount = parseInt((_a = prompt('Скільки показів температури плануєте ввести?')) !== null && _a !== void 0 ? _a : '');
    if (!isFinite(enteredTemperatureCount) || enteredTemperatureCount <= 0)
        throw new Error("Некоректне число");
    function getNegativeReadingCount(readingCount) {
        var _a;
        let count = 0;
        for (let i = 0; i < readingCount; i++) {
            const temperature = parseFloat((_a = prompt(`Введіть показник № ${i + 1} температури`)) !== null && _a !== void 0 ? _a : '');
            if (!isFinite(temperature))
                throw new Error("Некоректне число");
            if (temperature < 0)
                count++;
        }
        return count;
    }
    let result = getNegativeReadingCount(enteredTemperatureCount);
    document.write(`Kількість від'ємних показів температури: ${result}`);
}
