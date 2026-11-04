"use strict";
//Створити окремі функції, які для 4 чисел знаходять:
//1) суму
//2) добуток
//3)середнє арифметичне
//4)мінімальне значення. 
var _a, _b, _c, _d;
if (confirm('Почати?')) {
    const firstNum = parseFloat((_a = prompt('Введіть перше число')) !== null && _a !== void 0 ? _a : '');
    const secondNum = parseFloat((_b = prompt('Введіть друге число')) !== null && _b !== void 0 ? _b : '');
    const thirdNum = parseFloat((_c = prompt('Введіть третє число')) !== null && _c !== void 0 ? _c : '');
    const fourthNum = parseFloat((_d = prompt('Введіть четверте число')) !== null && _d !== void 0 ? _d : '');
    if (!isFinite(firstNum) || !isFinite(secondNum) || !isFinite(thirdNum) || !isFinite(fourthNum))
        throw new Error("Некоректне число");
    //---------------------------------------------------------------------------------
    function getSum(num1, num2, num3, num4) {
        const result = num1 + num2 + num3 + num4;
        return result;
    }
    const sum = getSum(firstNum, secondNum, thirdNum, fourthNum);
    //---------------------------------------------------------------------------------
    function getProduct(num1, num2, num3, num4) {
        const result = num1 * num2 * num3 * num4;
        return result;
    }
    const product = getProduct(firstNum, secondNum, thirdNum, fourthNum);
    //---------------------------------------------------------------------------------
    function getArithmeticMean(num1, num2, num3, num4) {
        const result = getSum(num1, num2, num3, num4) / 4;
        return result;
    }
    const arithmeticMean = getArithmeticMean(firstNum, secondNum, thirdNum, fourthNum);
    //---------------------------------------------------------------------------------
    function getMinValue(num1, num2, num3, num4) {
        const result = Math.min(num1, num2, num3, num4);
        return result;
    }
    const minValue = getMinValue(firstNum, secondNum, thirdNum, fourthNum);
    document.write(`
		Введені числа: ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum} <br>
			1. Сума : ${sum.toFixed(2)} <br>
			2. Добуток : ${product.toFixed(2)} <br>
			3. Середнє арифметичне : ${arithmeticMean.toFixed(2)} <br>
			4. Мінімальне значення: ${minValue.toFixed(2)}
		`);
}
