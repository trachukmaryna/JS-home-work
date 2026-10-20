"use strict";
var _a;
const dayOfWeekNumber = parseInt((_a = prompt("Введіть номер дня тижня")) !== null && _a !== void 0 ? _a : "");
if (!isFinite(dayOfWeekNumber) || dayOfWeekNumber <= 0 || dayOfWeekNumber > 7)
    throw new Error("Ввели некоректний номер!");
else {
    switch (dayOfWeekNumber) {
        case 1:
            document.write("Понеділок");
            break;
        case 2:
            document.write("Вівторок");
            break;
        case 3:
            document.write("Середа");
            break;
        case 4:
            document.write("Четвер");
            break;
        case 5:
            document.write("П'ятниця");
            break;
        case 6:
            document.write("Субота");
            break;
        case 7:
            document.write("Неділя");
            break;
        default:
            document.write("Невірний номер дня");
            break;
    }
}
