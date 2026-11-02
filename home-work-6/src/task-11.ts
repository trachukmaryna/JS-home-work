//Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.

{
	if (confirm('Почати?')) {
		for (let tens = 1; tens <= 9; tens++) {
			for (let ones = 0; ones <= tens; ones++) {
				document.write(`${tens}${ones} <br>`)
			}
		}
	}
}