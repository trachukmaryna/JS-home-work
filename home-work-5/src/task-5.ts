//Створити 10 елементів для введення цін продуктів

{
	if (confirm('Почати?')) {
		for (let i = 1; i <= 10; i++) {
			document.write(
				`
				<label>Product № ${i}
					<input type="number">
				</label>
				<br>
				`
			)
		}
	}
	else throw new Error("Скасовано")
}