//Інвестор  вклав  S тис. грн на 20 років під 20% річних,
// податок складає 5% від суми прибутку.
// Визначити за допомогою циклів суму, яку він одержить.

{
	if (confirm('Почати?')) {
		const depositTerm: number = 20
		const percentagePerAnnum: number = 20
		const tax: number = 5
		const deposit: number = parseFloat(prompt('Введіть суму вкладу, грн') ?? '')
		let currentAmount: number = deposit

		if (!isFinite(deposit) || deposit <= 0) throw new Error("Некоректна сума")

		for (let year = 1; year <= depositTerm; year++) {
			currentAmount += (currentAmount * percentagePerAnnum) / 100
		}
		const profit: number = currentAmount - deposit // прибуток
		const taxAmount: number = (profit * tax) / 100 // 5% від суми прибутку
		const receivedAmount: number = currentAmount - taxAmount

		document.write(`Отримана сума, яку одержить інвестор після оподаткування складає ${receivedAmount.toFixed(2)} тис. грн`)
	}
}