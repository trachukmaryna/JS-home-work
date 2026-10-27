//Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
// Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

{
	if (confirm('Почнемо?')) {
		const numberOfWeeks: number = parseInt(prompt('Введіть кількість тижнів') ?? '')
		let totalAmountProfit: number = 0

		if (!isFinite(numberOfWeeks) || numberOfWeeks <= 0) throw new Error("Некоректна кількість тижнів")
		else {
			for (let week = 1; week <= numberOfWeeks; week++) {
				let profitOfWeek: number = 0
				for (let day = 1; day <= 7; day++) {
					const profitForDay: number = parseFloat(prompt(`Введіть прибуток за ${day} день - ${week} тижня`) ?? '')
					if (!isFinite(profitForDay) || profitForDay < 0) throw new Error("Некоректна сума прибутку")
					else {
						profitOfWeek += profitForDay
					}
				}
				document.write(`Прибуток за ${week} тиждень складає ${profitOfWeek.toFixed(2)} грн <br>`)
				totalAmountProfit += profitOfWeek
			}
		}
		document.write(`Загальний прибуток за ${numberOfWeeks} тижня складає ${totalAmountProfit.toFixed(2)} грн`)
	}
	else throw new Error("Скасовано")
}