//Дано покази температур (довільна кількість).
//Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

if (confirm('Почати?')) {
	const enteredTemperatureCount: number = parseInt(prompt('Скільки показів температури плануєте ввести?') ?? '')
	if (!isFinite(enteredTemperatureCount) || enteredTemperatureCount <= 0) throw new Error("Некоректне число")


	function getNegativeReadingCount(readingCount: number): number {
		let count: number = 0
		for (let i = 0; i < readingCount; i++) {
			const temperature: number = parseFloat(prompt(`Введіть показник № ${i + 1} температури`) ?? '')
			if (!isFinite(temperature)) throw new Error("Некоректне число")
			if (temperature < 0) count++
		}
		return count
	}
	let result: number = getNegativeReadingCount(enteredTemperatureCount)

	document.write(`Kількість від'ємних показів температури: ${result}`)
}