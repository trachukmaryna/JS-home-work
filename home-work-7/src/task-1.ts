//Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

if (confirm('Почати?')) {
	function getSeason(monthNumber: number) {
		let result: string
		switch (monthNumber) {
			case 12:
			case 1:
			case 2: result = 'Зима'
				break
			case 3:
			case 4:
			case 5: result = 'Весна'
				break
			case 6:
			case 7:
			case 8: result = 'Літо'
				break
			case 9:
			case 10:
			case 11: result = 'Осінь'
				break
			default: throw new Error("Некоректний номер місяця")
		}
		return result
	}
	const enteredMonthNumber: number = parseInt(prompt('Введіть номер місяця від 1 до 12') ?? '')
	const season: string = getSeason(enteredMonthNumber)
	document.write(`Місяць номер ${enteredMonthNumber} це ${season} `)
}
