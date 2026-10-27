//Вивести на екран N абзаців (N вводиться користувачем) за зразком:

{
	if (confirm('Почати?')) {
		const numberOfParagraphs = parseInt(prompt('Введіть кількість параграфів') ?? '')
		if (!isFinite(numberOfParagraphs) || numberOfParagraphs < 0) throw new Error("Некоректне число")
		else {
			for (let section = 1; section <= numberOfParagraphs; section++) {
				document.write(`<h2>Заголовок ${section}</h2>`)
				for (let paragraph = 1; paragraph <= section; paragraph++) {
					document.write(`<p>Розділ ${section}, параграф ${paragraph}</p>`)
				}
				document.write(`<hr>`)
			}

		}
	}
	else throw new Error("Скасовано")
}