//Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm('Почати?')) {
	const firstNum: number = parseFloat(prompt('Введіть перше число') ?? '')
	const secondNum: number = parseFloat(prompt('Введіть друге число') ?? '')
	const thirdNum: number = parseFloat(prompt('Введіть третє число') ?? '')

	if (!isFinite(firstNum) || !isFinite(secondNum) || !isFinite(thirdNum)) throw new Error("Некоректне число")

	function isEven(num: number): boolean {
		return num % 2 === 0
	}

	function isPositive(num: number): boolean {
		return num > 0
	}

	function isGreaterThan100(num: number): boolean {
		return num > 100
	}

	function getNumbersStats(num1: number, num2: number, num3: number) {
		const evenCount: number = (isEven(num1) ? 1 : 0) + (isEven(num2) ? 1 : 0) + (isEven(num3) ? 1 : 0)
		const positiveCount: number = (isPositive(num1) ? 1 : 0) + (isPositive(num2) ? 1 : 0) + (isPositive(num3) ? 1 : 0)
		const greaterThan100Count: number = (isGreaterThan100(num1) ? 1 : 0) + (isGreaterThan100(num2) ? 1 : 0) + (isGreaterThan100(num3) ? 1 : 0)
		return `Kількість парних: ${evenCount}, кількість додатних: ${positiveCount}, кількість більших за 100: ${greaterThan100Count}`
	}

	const result: string = getNumbersStats(firstNum, secondNum, thirdNum)

	document.write(result)
}