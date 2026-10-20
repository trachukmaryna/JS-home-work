"use strict";
var _a;
const driverCategory = ((_a = prompt("Введіть категорію водія")) !== null && _a !== void 0 ? _a : "").toUpperCase();
let result;
if (!driverCategory)
    throw new Error("Ввели некоректну категорію!");
else {
    switch (driverCategory) {
        case "A": //Латиниця
        case "А": //Кирилиця
            result = "А-мотоцикл";
            break;
        case "B": //Латиниця
        case "В": //Кирилиця
            result = "В-легковий автомобіль";
            break;
        case "C": //Латиниця
        case "С": //Кирилиця
            result = "С-вантажний автомобіль";
            break;
        default:
            result = "Такої категорії не існує";
            break;
    }
    document.write(result);
}
