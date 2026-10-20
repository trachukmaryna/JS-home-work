"use strict";
var _a;
const age = parseInt((_a = prompt("Введіть вік людини")) !== null && _a !== void 0 ? _a : "");
if (!isFinite(age) || age < 0 || age >= 100)
    throw new Error("Ввели некоректний вік!");
else {
    if (age <= 3)
        document.write(`Малюк`);
    else if (age <= 5)
        document.write(`Дитина у садочку`);
    else if (age <= 17)
        document.write(`Дитина школяр`);
    else if (age <= 23)
        document.write(`Студент`);
    else if (age <= 60)
        document.write(`Працююча людина`);
    else
        document.write(`Пенсіонер`);
}
