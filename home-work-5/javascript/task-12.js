"use strict";
//Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).
{
    if (confirm('Загадайте число від 1 до 10')) {
        const minNumber = 1;
        const maxNumber = 10;
        let result = true;
        do {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            result = confirm(`Ваше загадане число ${randomNumber}`);
        } while (result === false);
        alert('Вгадав');
    }
    else
        throw new Error("Скасовано");
}
