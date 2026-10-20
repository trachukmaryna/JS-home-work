const min: number = 1;
const max: number = 5;
const numberOfAttempts: number = 2;
let enteredNumber: number = parseInt(prompt("Введіть число") ?? "");
const randomInRange: number = Math.floor(Math.random() * (max - min + 1)) + min;
let count: number = 0;

if (!isFinite(enteredNumber) || enteredNumber < min || enteredNumber > max)
	throw new Error("Ввели некоректне число !");
else {
	if (enteredNumber === randomInRange) alert(`Ви вгадали число! Вітаємо!`);
	else {
		count++;
		const odds = numberOfAttempts - count;
		alert(`Ви не вгадали число! Залишилось кількість спроб: ${odds} `);
		enteredNumber = parseInt(prompt("Введіть число") ?? "");
		if (!isFinite(enteredNumber) || enteredNumber < min || enteredNumber > max)
			throw new Error("Ввели некоректне число !");
		else {
			if (enteredNumber === randomInRange) alert(`Ви вгадали число! Вітаємо!`);
			else
				alert(
					`Ви не вгадали число! Спроби закінчились! Загадане число ${randomInRange}`,
				);
		}
	}
}
