const productPrice: number = parseFloat(prompt("Введіть ціну товару") ?? "");
const amountOfMoney: number = parseFloat(prompt("Введіть суму грошей") ?? "");
const changeMoney: number = amountOfMoney - productPrice;
const lotteryCost: number = 4;

if (
	!isFinite(productPrice) ||
	productPrice <= 0 ||
	!isFinite(amountOfMoney) ||
	amountOfMoney < 0
)
	throw new Error("Ввели некоректну інформацію !");
else {
	if (amountOfMoney < productPrice)
		document.write("В покупці відмовлено! Недостатньо коштів!");
	else if (productPrice === amountOfMoney || changeMoney < lotteryCost)
		document.write("Дякуємо за покупку!");
	else document.write(`Дякуємо за покупку! Пропонуємо купити лотерею за ${lotteryCost} грн.`);
}
