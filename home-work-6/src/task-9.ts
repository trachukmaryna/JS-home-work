//Інвестор вклав  S тис. грн 
// на 20 років 
// під 20% річних, 
// а потім на 17 років 
// під 27% річних. 
// Визначити за допомогою циклів суму, яку він одержить.
{
	if (confirm('Почати?')) {
		const deposit: number = parseFloat(prompt('Введіть суму депозиту') ?? '') //Інвестор вклав  S тис. грн
		const termOfDeposit: number = 20 //на 20 років
		const percentagePerAnnum: number = 20 //під 20% річних
		let currentAmount: number = deposit

		const secondTermOfDeposit: number = 17 //на 17 років
		const secondPercentagePerAnnum: number = 27 //під 27% річних

		if (!isFinite(deposit) || deposit <= 0) throw new Error("Некоректна сума депозиту")

		for (let year = 1; year <= termOfDeposit; year++) {
			currentAmount += (currentAmount * percentagePerAnnum) / 100
		}
		document.write(`Сума після першого етапу ${currentAmount.toFixed(2)} тис.грн <br>`)
		for (let year = 1; year <= secondTermOfDeposit; year++) {
			currentAmount += (currentAmount * secondPercentagePerAnnum) / 100
		}
		document.write(`Сума після другого етапу ${currentAmount.toFixed(2)} тис.грн`)
	}
}