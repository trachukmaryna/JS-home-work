//Вивести на екран послідовність символів
// а о а о а о а о а о …
// Всього символів 82.
{
	if (confirm('Почати?')) {
		for (let i = 0; i < 82; i++) {
			if (i % 2 === 0) document.write(`a`)
			else document.write(`o`)
		}
	}
}