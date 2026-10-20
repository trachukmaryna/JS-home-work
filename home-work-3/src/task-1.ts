const firstName: string = prompt("Введіть ім'я першої дитини") ?? "";
const numberOfCandiesFirstChild: number = parseInt(
	prompt("Введіть кількість цукерок у першої дитини") ?? "",
);
const secondName: string = prompt("Введіть ім'я другої дитини") ?? "";
const numberOfCandiesSecondChild: number = parseInt(
	prompt("Введіть кількість цукерок у другої дитини") ?? "",
);

if (
	!isFinite(numberOfCandiesFirstChild) ||
	numberOfCandiesFirstChild < 0 ||
	!firstName ||
	!isFinite(numberOfCandiesSecondChild) ||
	numberOfCandiesSecondChild < 0 ||
	!secondName
)
	throw new Error("Ввели не коректну інформацію !");
else {
	if (numberOfCandiesFirstChild > numberOfCandiesSecondChild)
		document.write(`Цукерок більше у першої дитини на ім'я ${firstName}`);
	else if (numberOfCandiesSecondChild > numberOfCandiesFirstChild)
		document.write(`Цукерок більше у другої дитини на ім'я ${secondName}`);
	else document.write(`Цукерок однаково у обох дітей`);
}
