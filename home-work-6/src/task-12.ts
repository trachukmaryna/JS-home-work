//Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.

if (confirm('Почати?')) {
	for (let hundreds = 1; hundreds <= 9; hundreds++) {
		for (let tens = 0; tens <= 9; tens++) {
			for (let ones = 0; ones <= 9; ones++) {
				const sum = tens + ones
				if (hundreds >= sum) document.write(`${hundreds}${tens}${ones}<br>`)
			}
		}
	}
}