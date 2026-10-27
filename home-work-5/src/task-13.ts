//Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 
{
	if (confirm('Почнемо?')) {
		const initialNumber: number = parseInt(prompt('Введіть число нижню межу діапазону') ?? '')
		const endNumber: number = parseInt(prompt('Введіть число верхню межу діапазону') ?? '')
		let sum: number = 0
		if (!isFinite(initialNumber) || !isFinite(endNumber) || initialNumber > endNumber) throw new Error("Некоректне число")
		else {
			for (let i = initialNumber; i <= endNumber; i++) {
				if (i % 2 !== 0) sum += i
				else continue
			}
			document.write(`Сума всих непарних чисел в діапазоні від ${initialNumber} до ${endNumber} складає ${sum}`)
		}
	}
	else throw new Error("Скасовано")
} 