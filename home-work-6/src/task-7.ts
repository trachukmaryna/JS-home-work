// Інвестор вклав S тис. грн на 20 років під 20% річних.
// Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

{
	if (confirm('Почати?')) {
		const depositTerm: number = 20
		const percentagePerAnnum: number = 20
		const deposit: number = parseFloat(prompt('Введіть суму вкладу, грн') ?? '')
		let currentAmount: number = deposit

		if (!isFinite(deposit) || deposit <= 0) throw new Error("Некоректна сума")

		for (let year = 1; year <= depositTerm; year++) {
			currentAmount += (currentAmount * percentagePerAnnum) / 100
		}
		document.write(`Отримана сума, яку одержить інвестор без оподаткування складає ${currentAmount.toFixed(2)} тис. грн`)
	}
}