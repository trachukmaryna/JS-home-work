//Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

{
	if (confirm('Почнемо?')) {
		let sumTemperature: number = 0
		const monthsInYear: number = 12
		for (let i = 1; i <= monthsInYear; i++) {
			const temperatureReading: number = parseFloat(prompt(`Введіть показник за ${i} місяць`) ?? '')
			if (!isFinite(temperatureReading)) throw new Error("Некоректна температура")
			else {
				sumTemperature += temperatureReading
			}
		}
		const averageTemperature: number = sumTemperature / monthsInYear
		document.write(`Середня температура за рік складає ${averageTemperature.toFixed(2)} °C`)
	}
	else throw new Error("Скасовано")
}
