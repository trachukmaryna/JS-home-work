const monthNumber: number = parseInt(prompt("Введіть номер місяця") ?? "");

if (!isFinite(monthNumber) || monthNumber <= 0 || monthNumber > 12)
	throw new Error("Ввели некоректний номер місяця!");
else {
	switch (monthNumber) {
		case 12:
		case 1:
		case 2:
			document.write("Зима");
			break;
		case 3:
		case 4:
		case 5:
			document.write("Весна");
			break;
		case 6:
		case 7:
		case 8:
			document.write("Літо");
			break;
		case 9:
		case 10:
		case 11:
			document.write("Осінь");
			break;
		default:
			document.write("Невірний номер місяця");
			break;
	}
}
