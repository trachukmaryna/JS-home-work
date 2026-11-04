"use strict";
//Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
var _a;
if (confirm('Почати?')) {
    const enteredTemperatureCount = parseInt((_a = prompt('Скільки показів температури плануєте ввести?')) !== null && _a !== void 0 ? _a : '');
    if (!isFinite(enteredTemperatureCount) || enteredTemperatureCount <= 0)
        throw new Error("Некоректне число");
    function getAveragePositiveTemperature(readingCount) {
        var _a;
        let sumPositive = 0;
        let positiveCount = 0;
        for (let i = 0; i < readingCount; i++) {
            const temperatureValue = parseFloat((_a = prompt(`Введіть показник № ${i + 1} температури`)) !== null && _a !== void 0 ? _a : '');
            if (!isFinite(temperatureValue))
                throw new Error("Некоректне число");
            if (temperatureValue > 0) {
                positiveCount++;
                sumPositive += temperatureValue;
            }
        }
        if (positiveCount === 0)
            throw new Error("Немає додатніх показів температури");
        const average = sumPositive / positiveCount;
        return average;
    }
    const result = getAveragePositiveTemperature(enteredTemperatureCount);
    document.write(`Cереднє значення для додатних показів температури: ${result.toFixed(2)} °C`);
}
