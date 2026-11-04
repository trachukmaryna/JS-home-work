"use strict";
//Задача 5. Створити окремі функції, які переводять:
//Сантиметри у дюйми;
//Кілограми у фунти;
//Кілометри у милі.
if (confirm('Почати?')) {
    //Функція введення і перевірки
    function readPositiveNumber(message) {
        var _a;
        const value = parseFloat((_a = prompt(`Введіть ${message}`)) !== null && _a !== void 0 ? _a : '');
        if (!isFinite(value) || value < 0)
            throw new Error("Некоректне число");
        return value;
    }
    //----------------------------------------------------------------------------
    const centimeters = readPositiveNumber('сантиметри');
    function convertCentimetersToInches(cm) {
        const cmPerInch = 2.54;
        const result = cm / cmPerInch;
        return result;
    }
    const inches = convertCentimetersToInches(centimeters);
    document.write(`В ${centimeters} см: ${inches.toFixed(2)} дюймів <br>`);
    //----------------------------------------------------------------------------
    const kilograms = readPositiveNumber('кілограми');
    function convertKilogramsToPounds(kg) {
        const poundsPerKg = 2.20462;
        const result = kg * poundsPerKg;
        return result;
    }
    const pounds = convertKilogramsToPounds(kilograms);
    document.write(`В ${kilograms} кг: ${pounds.toFixed(2)} фунтів <br>`);
    //----------------------------------------------------------------------------
    const kilometers = readPositiveNumber('кілометри');
    function convertKilometersToMiles(km) {
        const milesPerKm = 0.621371;
        const result = km * milesPerKm;
        return result;
    }
    const miles = convertKilometersToMiles(kilometers);
    document.write(`В ${kilometers} км: ${miles.toFixed(2)} миль <br>`);
}
