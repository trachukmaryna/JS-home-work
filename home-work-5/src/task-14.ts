//Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
{
	if (confirm('Почнемо?')) {
		const initialNumber: number = parseInt(prompt('Введіть число нижню межу діапазону') ?? '')
		const endNumber: number = parseInt(prompt('Введіть число верхню межу діапазону') ?? '')
		let sum: number = 0
		let counter: number = 0
		if (!isFinite(initialNumber) || !isFinite(endNumber) || initialNumber > endNumber) throw new Error("Некоректне число")
		else {
			for (let i = initialNumber; i <= endNumber; i++) {
				if (i % 2 !== 0) {
					sum += i
					counter++
					if (counter === 5) break
					else continue
				}
			}
			if (counter < 5) document.write(`Сума непарних чисел в діапазоні від ${initialNumber} до ${endNumber} складає ${sum}`)
			else document.write(`Сума 5 непарних чисел в діапазоні від ${initialNumber} до ${endNumber} складає ${sum}`)
		}
	}
	else throw new Error("Скасовано")
}