"use strict";
var _a, _b, _c, _d;
const firstName = (_a = prompt("Введіть ім'я першої дитини")) !== null && _a !== void 0 ? _a : "";
const numberOfCandiesFirstChild = parseInt((_b = prompt("Введіть кількість цукерок у першої дитини")) !== null && _b !== void 0 ? _b : "");
const secondName = (_c = prompt("Введіть ім'я другої дитини")) !== null && _c !== void 0 ? _c : "";
const numberOfCandiesSecondChild = parseInt((_d = prompt("Введіть кількість цукерок у другої дитини")) !== null && _d !== void 0 ? _d : "");
if (!isFinite(numberOfCandiesFirstChild) ||
    numberOfCandiesFirstChild < 0 ||
    !firstName ||
    !isFinite(numberOfCandiesSecondChild) ||
    numberOfCandiesSecondChild < 0 ||
    !secondName)
    throw new Error("Ввели не коректну інформацію !");
else {
    if (numberOfCandiesFirstChild > numberOfCandiesSecondChild)
        document.write(`Цукерок більше у першої дитини на ім'я ${firstName}`);
    else if (numberOfCandiesSecondChild > numberOfCandiesFirstChild)
        document.write(`Цукерок більше у другої дитини на ім'я ${secondName}`);
    else
        document.write(`Цукерок однаково у обох дітей`);
}
