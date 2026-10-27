//  Вивести таблицю з 3 рядків і 7 стовпців

{
	if (confirm('Почати?')) {
		document.write(`
			<table style="border-collapse: collapse;">
		`)
		for (let row = 1; row <= 3; row++) {
			document.write(`<tr>`)
			for (let col = 1; col <= 7; col++) {
				document.write(`<td style="border: 2px solid black; padding: 5px;">${col}</td>`)
			}
			document.write(`</tr>`)
		}
		document.write(`
			</table>
		`)
	}
	else throw new Error("Скасовано")
}