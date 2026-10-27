"use strict";
//Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
{
    if (confirm('Загадайте число від 1 до 10')) {
        const minNumber = 1;
        const maxNumber = 10;
        let attempt;
        const maxAttempts = 3;
        for (attempt = 1; attempt <= maxAttempts; attempt++) {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            if (confirm(`Ваше число ${randomNumber}?`)) {
                alert('Вгадав');
                break;
            }
            else
                alert('Не вгадав');
        }
        if (attempt > maxAttempts)
            alert('Програш. Спроби закінчились');
    }
    else
        throw new Error("Скасовано");
}
