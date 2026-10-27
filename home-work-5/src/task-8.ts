//  Вивести таблицю
{
	if (confirm('Почати?')) {
		document.write(`
			<table style="border-collapse: collapse;">
		`)
		for (let row = 1; row <= 3; row++) {
			document.write(`<tr>`)
			for (let col = 1; col <= 3; col++) {
				const number: number = (row - 1) * 3 + col
				document.write(`<td style="border: 2px solid black; padding: 5px;">${number}</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`
			</table>
		`)
	}
	else throw new Error("Скасовано")
}