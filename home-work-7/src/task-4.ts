//Створити окремі функції, які для 4 чисел знаходять:
//1) суму
//2) добуток
//3)середнє арифметичне
//4)мінімальне значення. 

if (confirm('Почати?')) {
	const firstNum: number = parseFloat(prompt('Введіть перше число') ?? '')
	const secondNum: number = parseFloat(prompt('Введіть друге число') ?? '')
	const thirdNum: number = parseFloat(prompt('Введіть третє число') ?? '')
	const fourthNum: number = parseFloat(prompt('Введіть четверте число') ?? '')

	if (!isFinite(firstNum) || !isFinite(secondNum) || !isFinite(thirdNum) || !isFinite(fourthNum)) throw new Error("Некоректне число")
	//---------------------------------------------------------------------------------
	function getSum(num1: number, num2: number, num3: number, num4: number) {
		const result: number = num1 + num2 + num3 + num4
		return result
	}
	const sum = getSum(firstNum, secondNum, thirdNum, fourthNum)
	//---------------------------------------------------------------------------------
	function getProduct(num1: number, num2: number, num3: number, num4: number) {
		const result: number = num1 * num2 * num3 * num4
		return result
	}
	const product = getProduct(firstNum, secondNum, thirdNum, fourthNum)
	//---------------------------------------------------------------------------------
	function getArithmeticMean(num1: number, num2: number, num3: number, num4: number) {
		const result: number = getSum(num1, num2, num3, num4) / 4
		return result
	}
	const arithmeticMean = getArithmeticMean(firstNum, secondNum, thirdNum, fourthNum)
	//---------------------------------------------------------------------------------
	function getMinValue(num1: number, num2: number, num3: number, num4: number) {
		const result: number = Math.min(num1, num2, num3, num4)
		return result
	}
	const minValue = getMinValue(firstNum, secondNum, thirdNum, fourthNum)

	document.write(`
		Введені числа: ${firstNum}, ${secondNum}, ${thirdNum}, ${fourthNum} <br>
			1. Сума : ${sum.toFixed(2)} <br>
			2. Добуток : ${product.toFixed(2)} <br>
			3. Середнє арифметичне : ${arithmeticMean.toFixed(2)} <br>
			4. Мінімальне значення: ${minValue.toFixed(2)}
		`)
}