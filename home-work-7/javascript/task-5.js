"use strict";
//Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.
var _a, _b, _c;
if (confirm('Почати?')) {
    const firstNum = parseFloat((_a = prompt('Введіть перше число')) !== null && _a !== void 0 ? _a : '');
    const secondNum = parseFloat((_b = prompt('Введіть друге число')) !== null && _b !== void 0 ? _b : '');
    const thirdNum = parseFloat((_c = prompt('Введіть третє число')) !== null && _c !== void 0 ? _c : '');
    if (!isFinite(firstNum) || !isFinite(secondNum) || !isFinite(thirdNum))
        throw new Error("Некоректне число");
    function isEven(num) {
        return num % 2 === 0;
    }
    function isPositive(num) {
        return num > 0;
    }
    function isGreaterThan100(num) {
        return num > 100;
    }
    function getNumbersStats(num1, num2, num3) {
        const evenCount = (isEven(num1) ? 1 : 0) + (isEven(num2) ? 1 : 0) + (isEven(num3) ? 1 : 0);
        const positiveCount = (isPositive(num1) ? 1 : 0) + (isPositive(num2) ? 1 : 0) + (isPositive(num3) ? 1 : 0);
        const greaterThan100Count = (isGreaterThan100(num1) ? 1 : 0) + (isGreaterThan100(num2) ? 1 : 0) + (isGreaterThan100(num3) ? 1 : 0);
        return `Kількість парних: ${evenCount}, кількість додатних: ${positiveCount}, кількість більших за 100: ${greaterThan100Count}`;
    }
    const result = getNumbersStats(firstNum, secondNum, thirdNum);
    document.write(result);
}
