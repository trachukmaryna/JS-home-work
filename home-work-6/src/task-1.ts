//0. Вивести на екран
// A B C D E
// B C D E F
// C D E F G
// D E F G H
// E F G H I
{
	if (confirm('Почати?')) {
		const letters: string = 'ABCDEFGHI'
		for (let row = 0; row < 5; row++) {
			document.write(`<br>`)
			for (let col = 0; col < 5; col++) {
				document.write(`${letters.charAt(row + col)} `)
			}
		}
	}
}