const dayOfWeekNumber: number = parseInt(
	prompt("Введіть номер дня тижня") ?? "",
);

let day: string;

if (!isFinite(dayOfWeekNumber) || dayOfWeekNumber <= 0 || dayOfWeekNumber > 7)
	throw new Error("Ввели некоректний номер!");
else {
	switch (dayOfWeekNumber) {
		case 1:
			day = "Понеділок";
			break;
		case 2:
			day = "Вівторок";
			break;
		case 3:
			day = "Середа";
			break;
		case 4:
			day = "Четвер";
			break;
		case 5:
			day = "П'ятниця";
			break;
		case 6:
			day = "Субота";
			break;
		case 7:
			day = "Неділя";
			break;
		default:
			day = "Невірний номер дня";
			break;
	}
	document.write(day);
}
