//Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.
{
	if (confirm('Почати?')) {
		const numberOfNumbers: number = parseInt(prompt('Введіть кількість чисел') ?? '')
		const min: number = 1
		const max: number = 100
		if (!isFinite(numberOfNumbers) || numberOfNumbers < 0) throw new Error("Некоректне число")
		else {
			document.write(`<ul>`)
			for (let i = 0; i < numberOfNumbers; i++) {
				const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min
				document.write(`<li>${randomNumber}</li>`)
			}
			document.write(`</ul>`)
		}
	}
	else throw new Error("Скасовано")
}
