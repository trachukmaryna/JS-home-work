// Відобразити трикутник за допомогою символів «о»
// о
// оо
// ооо
// оооо
// ооооо
// оооооо
// ооооооо
{
	if (confirm('Почати?')) {
		for (let row = 1; row <= 7; row++) {
			document.write(`<br>`)
			for (let col = 1; col <= row; col++) {
				document.write(`o`)
			}
		}
	}
}