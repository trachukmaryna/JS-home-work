"use strict";
//Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
var _a;
if (confirm('Почати?')) {
    const productsPrices = [1000, 20, 31];
    const productsTitles = ['cheese', 'juice', 'bread'];
    const moneyAmount = parseFloat((_a = prompt('Введіть кількість грошей')) !== null && _a !== void 0 ? _a : '');
    if (!isFinite(moneyAmount) || moneyAmount < 0)
        throw new Error("Некоректна сума");
    function getAffordableProducts(prices, titles, money) {
        let titlesArr = [];
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] <= money) {
                titlesArr.push(titles[i]);
            }
        }
        return titlesArr;
    }
    const productList = getAffordableProducts(productsPrices, productsTitles, moneyAmount);
    document.write(`Введених коштів вистачить на: ${productList}`);
}
