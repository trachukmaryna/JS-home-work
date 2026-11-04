//Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm('Почати?')) {
	const addedRow: number = parseInt(prompt('Введіть кількість рядків') ?? '')
	const addedCol: number = parseInt(prompt('Введіть кількість стовпців') ?? '')

	if (!isFinite(addedRow) || !isFinite(addedCol) || addedRow <= 0 || addedCol <= 0) throw new Error("Некоретне число")

	function getTable(addedRow: number, addedCol: number, message: string) {
		document.write(`<table border=1px><thead>`)
		for (let row = 1; row <= addedRow; row++) {
			document.write(`<tr>`)
			for (let col = 1; col <= addedCol; col++) {
				document.write(`<td>${message}</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`</thead></table>`)
	}

	getTable(addedRow, addedCol, 'Hello!')
}