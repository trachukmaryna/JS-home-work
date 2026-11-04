"use strict";
//Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
var _a;
if (confirm('Почати?')) {
    function isWorkingDay(dayNumber) {
        let result;
        switch (dayNumber) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                result = true;
                break;
            case 6:
            case 7:
                result = false;
                break;
            default:
                throw new Error("Некоректний номер дня");
        }
        return result;
    }
    const enteredDayNumber = parseInt((_a = prompt('Введіть номер дня')) !== null && _a !== void 0 ? _a : '');
    const typeOfDay = isWorkingDay(enteredDayNumber);
    let dayType;
    if (typeOfDay)
        dayType = 'робочий день';
    else
        dayType = 'вихідний день';
    document.write(`День номер ${enteredDayNumber} це ${dayType}`);
}
