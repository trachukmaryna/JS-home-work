"use strict";
//Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
var _a;
{
    if (confirm('Почнемо?')) {
        let sumTemperature = 0;
        const monthsInYear = 12;
        for (let i = 1; i <= monthsInYear; i++) {
            const temperatureReading = parseFloat((_a = prompt(`Введіть показник за ${i} місяць`)) !== null && _a !== void 0 ? _a : '');
            if (!isFinite(temperatureReading))
                throw new Error("Некоректна температура");
            else {
                sumTemperature += temperatureReading;
            }
        }
        const averageTemperature = sumTemperature / monthsInYear;
        document.write(`Середня температура за рік складає ${averageTemperature.toFixed(2)} °C`);
    }
    else
        throw new Error("Скасовано");
}
