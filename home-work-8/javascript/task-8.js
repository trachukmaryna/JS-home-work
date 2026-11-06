"use strict";
//Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
var _a;
if (confirm('Почати?')) {
    function generateRandomPrizes(elementsCount, minValue, maxValue) {
        const winningAmount = [];
        for (let i = 0; i < elementsCount; i++) {
            const randomWinningAmount = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            winningAmount.push(randomWinningAmount);
        }
        return winningAmount;
    }
    const elementsCount = 10;
    const minValue = -500;
    const maxValue = 500;
    const randomPrizes = generateRandomPrizes(elementsCount, minValue, maxValue);
    let totalWinnings = 0;
    do {
        const selectedElementNumber = parseInt((_a = prompt(`Виберіть елемент від 1 до ${elementsCount}`)) !== null && _a !== void 0 ? _a : '');
        if (!isFinite(selectedElementNumber) || selectedElementNumber <= 0 || selectedElementNumber > elementsCount)
            throw new Error("Некоректне число");
        const selectedBoxPrize = randomPrizes[selectedElementNumber - 1];
        totalWinnings += selectedBoxPrize;
        alert(`У скриньці № ${selectedElementNumber} було ${selectedBoxPrize} грн`);
    } while (confirm('Продовжити гру?'));
    document.write(`Ваш виграш ${totalWinnings} грн`);
}
