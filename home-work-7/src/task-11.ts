//Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

if (confirm('Почати?')) {
	const enteredTemperatureCount: number = parseInt(prompt('Скільки показів температури плануєте ввести?') ?? '')
	if (!isFinite(enteredTemperatureCount) || enteredTemperatureCount <= 0) throw new Error("Некоректне число")

	function getAveragePositiveTemperature(readingCount: number): number {
		let sumPositive: number = 0
		let positiveCount: number = 0
		for (let i = 0; i < readingCount; i++) {
			const temperatureValue: number = parseFloat(prompt(`Введіть показник № ${i + 1} температури`) ?? '')
			if (!isFinite(temperatureValue)) throw new Error("Некоректне число")
			if (temperatureValue > 0) {
				positiveCount++
				sumPositive += temperatureValue
			}
		}
		if (positiveCount === 0) throw new Error("Немає додатніх показів температури")

		const average: number = sumPositive / positiveCount
		return average
	}
	const result: number = getAveragePositiveTemperature(enteredTemperatureCount)
	document.write(`Cереднє значення для додатних показів температури: ${result.toFixed(2)} °C`)
}