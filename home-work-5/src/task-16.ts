//Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 

{
	if (confirm('Почнемо?')) {
		const N: number = parseInt(prompt('Введіть кількість рядків поля') ?? '')
		const M: number = parseInt(prompt('Введіть кількість стовпців поля') ?? '')
		const K: number = parseInt(prompt('Введіть кількість снарядів') ?? '')
		let shotCounter: number = 0
		if (!isFinite(N) || !isFinite(M) || !isFinite(K) || N <= 0 || M <= 0 || K <= 0) throw new Error("Некоректні дані")
		else {
			const randomRow: number = Math.floor(Math.random() * (N - 1 + 1)) + 1
			const randomCol: number = Math.floor(Math.random() * (M - 1 + 1)) + 1
			for (let shot = 1; shot <= K; shot++) {
				const shotRow = parseInt(prompt('Введіть рядок для пострілу') ?? '')
				const shotCol = parseInt(prompt('Введіть стовпець для пострілу') ?? '')
				shotCounter++
				const shotsRemaining = K - shotCounter
				if (randomRow === shotRow && randomCol === shotCol) {
					alert(`Влучив! Корабель знищено!`)
					break
				}
				else if (shotsRemaining > 0)
					alert(`Не влучив. Залишилось cнарядів ${shotsRemaining}`)

				else alert(`Програв!Спробуй ще раз!Кораблик був в рядку ${randomRow} та в стовпці ${randomCol}`)
			}
		}
	}
	else throw new Error("Скасовано")
}

