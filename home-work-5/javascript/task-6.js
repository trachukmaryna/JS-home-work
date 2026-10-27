"use strict";
//Вивести таблицю з одним рядком і  7 стовпцями.
{
    if (confirm('Почати?')) {
        document.write(`
			<table style="border-collapse: collapse;">
				<tr>
		`);
        for (let row = 1; row <= 7; row++) {
            document.write(`<td style="border: 2px solid black; padding: 5px;">${row}</td>`);
        }
        document.write(`
				</tr>
			</table>
		`);
    }
    else
        throw new Error("Скасовано");
}
