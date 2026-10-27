"use strict";
//Ігровий автомат. Випадково вибираємо зображення у 3 позиціях.
// Вибір у кожній позиції вибирається як одне з чотирьох зображень.
// Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн).
// Використати цикли і switch (для вибору зображення за номером).
{
    if (confirm('Почнемо?')) {
        const min = 1;
        const max = 4;
        let firstNumber = 0;
        let isWin = true;
        for (let position = 1; position <= 3; position++) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (position === 1)
                firstNumber = randomNumber;
            else if (randomNumber !== firstNumber)
                isWin = false;
            let imagePath;
            switch (randomNumber) {
                case 1:
                    imagePath = '1.svg';
                    break;
                case 2:
                    imagePath = '2.svg';
                    break;
                case 3:
                    imagePath = '3.svg';
                    break;
                default:
                    imagePath = '4.svg';
                    break;
            }
            document.write(`<img src="../img/${imagePath}" width="200">`);
        }
        if (isWin) {
            let prize;
            switch (firstNumber) {
                case 1:
                    prize = 100;
                    break;
                case 2:
                    prize = 200;
                    break;
                case 3:
                    prize = 500;
                    break;
                default:
                    prize = 1000;
                    break;
            }
            document.write(`Виграш: ${prize} грн!`);
        }
        else
            document.write(`Вам не пощастило. Спробуйте ще раз!`);
    }
    else
        throw new Error("Скасовано");
}
