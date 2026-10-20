const driverCategory: string = (
	prompt("Введіть категорію водія") ?? ""
).toUpperCase();

let result: string;

if (!driverCategory) throw new Error("Ввели некоректну категорію!");
else {
	switch (driverCategory) {
		case "A": //Латиниця
		case "А": //Кирилиця
			result = "А-мотоцикл";
			break;
		case "B": //Латиниця
		case "В": //Кирилиця
			result = "В-легковий автомобіль";
			break;
		case "C": //Латиниця
		case "С": //Кирилиця
			result = "С-вантажний автомобіль";
			break;
		default:
			result = "Такої категорії не існує";
			break;
	}
	document.write(result);
}
