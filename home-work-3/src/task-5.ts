const driverCategory: string = (
	prompt("Введіть категорію водія") ?? ""
).toUpperCase();

if (!driverCategory) throw new Error("Ввели некоректну категорію!");
else {
	switch (driverCategory) {
		case "A": //Латиниця
		case "А": //Кирилиця
			document.write("А-мотоцикл");
			break;
		case "B": //Латиниця
		case "В": //Кирилиця
			document.write("В-легковий автомобіль");
			break;
		case "C": //Латиниця
		case "С": //Кирилиця
			document.write("С-вантажний автомобіль");
			break;
		default:
			document.write("Такої категорії не існує");
			break;
	}
}
