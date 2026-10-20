"use strict";
var _a;
const driverCategory = ((_a = prompt("Введіть категорію водія")) !== null && _a !== void 0 ? _a : "").toUpperCase();
if (!driverCategory)
    throw new Error("Ввели некоректну категорію!");
else {
    switch (driverCategory) {
        case "A": //Латиниця
        case "А": //Кирилиця
            document.write("А-мотоцикл");
            break;
        case "B": //Латиниця
        case "В": //Кирилиця
            document.write("В-легковий автомобіль");
            break;
        case "C": //Латиниця
        case "С": //Кирилиця
            document.write("С-вантажний автомобіль");
            break;
        default:
            document.write("Такої категорії не існує");
            break;
    }
}
