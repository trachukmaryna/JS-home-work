"use strict";
var _a, _b;
const productPrice = parseFloat((_a = prompt("Введіть ціну товару")) !== null && _a !== void 0 ? _a : "");
const amountOfMoney = parseFloat((_b = prompt("Введіть суму грошей")) !== null && _b !== void 0 ? _b : "");
const changeMoney = amountOfMoney - productPrice;
const lotteryCost = 4;
if (!isFinite(productPrice) ||
    productPrice <= 0 ||
    !isFinite(amountOfMoney) ||
    amountOfMoney < 0)
    throw new Error("Ввели некоректну інформацію !");
else {
    if (amountOfMoney < productPrice)
        document.write("В покупці відмовлено! Недостатньо коштів!");
    else if (productPrice === amountOfMoney || changeMoney < lotteryCost)
        document.write("Дякуємо за покупку!");
    else
        document.write(`Пропонуємо купити лотерею за ${lotteryCost} грн.`);
}
