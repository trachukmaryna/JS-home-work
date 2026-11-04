//Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

if (confirm('Почати?')) {
	function isWorkingDay(dayNumber: number) {
		let result: boolean
		switch (dayNumber) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: result = true
				break
			case 6:
			case 7: result = false
				break
			default:
				throw new Error("Некоректний номер дня")
		}
		return result
	}
	const enteredDayNumber: number = parseInt(prompt('Введіть номер дня') ?? '')
	const typeOfDay: boolean = isWorkingDay(enteredDayNumber)

	let dayType: string
	if (typeOfDay) dayType = 'робочий день'
	else dayType = 'вихідний день'

	document.write(`День номер ${enteredDayNumber} це ${dayType}`)
}