"use strict";
var _a;
const monthNumber = parseInt((_a = prompt("Введіть номер місяця")) !== null && _a !== void 0 ? _a : "");
let season;
if (!isFinite(monthNumber) || monthNumber <= 0 || monthNumber > 12)
    throw new Error("Ввели некоректний номер місяця!");
else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "Зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "Літо";
            break;
        case 9:
        case 10:
        case 11:
            season = "Осінь";
            break;
        default:
            season = "Невірний номер місяця";
            break;
    }
    document.write(season);
}
