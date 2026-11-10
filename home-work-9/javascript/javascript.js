"use strict";
var _a, _b, _c;
if (confirm("Begin ?")) {
	//1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
	{
		const elementsCount = parseInt(
			(_a = prompt("Enter the number of elements")) !== null && _a !== void 0
				? _a
				: "",
		);
		if (!isFinite(elementsCount) || elementsCount <= 0)
			throw new Error("Incorrect number of elements");
		function createZeroFilledArray(elementsCount) {
			const zeroFilledArray = new Array(elementsCount);
			for (let i = 0; i < zeroFilledArray.length; i++) {
				zeroFilledArray[i] = 0;
			}
			//Або const zeroFilledArray: number[] = new Array(elementsCount).fill(0)
			return zeroFilledArray;
		}
		const zeroFilledArray = createZeroFilledArray(elementsCount);
		console.log(zeroFilledArray);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	//2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
	{
		const elementsCount = parseInt(
			(_b = prompt("Enter the number of elements")) !== null && _b !== void 0
				? _b
				: "",
		);
		if (!isFinite(elementsCount) || elementsCount <= 0)
			throw new Error("Incorrect number of elements");
		function createOnesAndSevensArray(elementsCount) {
			const onesAndSevensArray = new Array(elementsCount);
			const middleIndex = Math.floor(onesAndSevensArray.length / 2);
			onesAndSevensArray.fill(1, 0, middleIndex);
			onesAndSevensArray.fill(7, middleIndex);
			return onesAndSevensArray;
		}
		const onesAndSevensArray = createOnesAndSevensArray(elementsCount);
		console.log(onesAndSevensArray);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
	{
		const elementsCount = parseInt(
			(_c = prompt("Enter the number of elements")) !== null && _c !== void 0
				? _c
				: "",
		);
		if (!isFinite(elementsCount) || elementsCount <= 0)
			throw new Error("Incorrect number of elements");
		function createSpecifiedOnesRestSevensArray(
			elementsCount,
			initialOnesCount,
		) {
			const specifiedOnesRestSevensArray = new Array(elementsCount);
			specifiedOnesRestSevensArray.fill(1, 0, initialOnesCount);
			specifiedOnesRestSevensArray.fill(7, initialOnesCount);
			return specifiedOnesRestSevensArray;
		}
		const initialOnesCount = 5;
		const specifiedOnesRestSevensArray = createSpecifiedOnesRestSevensArray(
			elementsCount,
			initialOnesCount,
		);
		console.log(specifiedOnesRestSevensArray);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 4. Дано масив елементів. Вивести на екран елементи, що більші за 100
	{
		const elementsArray = [88, 35, 100, 25, 158, 23, 963, 350, 280];
		function getElementsAboveThreshold(elementsArray, thresholdValue) {
			const elementsAboveThreshold = [];
			for (const element of elementsArray) {
				if (element > thresholdValue) elementsAboveThreshold.push(element);
			}
			return elementsAboveThreshold;
		}
		const thresholdValue = 100;
		const elementsAboveThreshold = getElementsAboveThreshold(
			elementsArray,
			thresholdValue,
		);
		console.log(elementsAboveThreshold);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 5. Дано масив елементів. Знайти добуток додатних елементів
	{
		const elementsArray = [88, 35, 100, -25, 158, 23, -963, 350, -280];
		function getPositiveElementsProduct(elementsArray) {
			let hasPositiveElement = false;
			let multiplicationResult = 1;
			for (const element of elementsArray) {
				if (element > 0) {
					multiplicationResult *= element;
					hasPositiveElement = true;
				}
			}
			if (!hasPositiveElement) multiplicationResult = 0;
			return multiplicationResult;
		}
		const positiveElementsProduct = getPositiveElementsProduct(elementsArray);
		if (positiveElementsProduct === 0) console.log("None positive");
		else console.log(positiveElementsProduct);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
	{
		const elementsArray = [44, 30, 41, 45, 50, 58, 63, 68, 74, 98];
		function multiplyElementsGreaterThanFirst(elementsArray, multiplier) {
			const firstElement = elementsArray[0];
			elementsArray.forEach((element, index) => {
				if (element > firstElement) elementsArray[index] = element * multiplier;
			});
			return elementsArray;
		}
		const multiplier = 2;
		const updatedElementsArray = multiplyElementsGreaterThanFirst(
			elementsArray,
			multiplier,
		);
		console.log(updatedElementsArray);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 7.Дано масив цін.Змінити цей масив так, що на ціни товарів, які більші за 1000 грн.дати 30 % знижки.
	{
		const prices = [
			19.99, 45.5, 1200.0, 8.75, 2990.9, 54.2, 15.0, 8900.99, 210.4, 33.1,
		];
		function applyDiscountToPricesAboveThreshold(
			prices,
			priceThreshold,
			discountPercent,
		) {
			prices.forEach((price, index) => {
				if (price > priceThreshold)
					prices[index] =
						Math.round(100 * (price * (1 - discountPercent / 100))) / 100;
			});
			return prices;
		}
		const priceThreshold = 1000;
		const discountPercent = 30;
		const updatedPricesArray = applyDiscountToPricesAboveThreshold(
			prices,
			priceThreshold,
			discountPercent,
		);
		console.log(updatedPricesArray);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 8. Дано масив номерів авто.Сформувати новий масив тих, які починаються на «А»
	{
		const licensePlateNumbers = [
			"AA1234BC",
			"AB5678CE",
			"KA9012HH",
			"AE3456II",
			"AA7890KK",
			"BC2345MM",
			"AX6789OO",
			"BH1122PP",
			"AA3344TT",
			"CB5566XX",
		];
		function getLicensePlatesStartingWithLetter(licensePlates, startLetter) {
			return licensePlates.filter(
				(licensePlate) => licensePlate[0] === startLetter,
			);
		}
		const startLetter = "A";
		const licensePlatesStartingWithLetter = getLicensePlatesStartingWithLetter(
			licensePlateNumbers,
			startLetter,
		);
		console.log(licensePlatesStartingWithLetter);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 9. Дано масив імен.Сформувати масив з перших літер цих імен.
	{
		const names = [
			"Alex",
			"Anna",
			"Bohdan",
			"Andrew",
			"Olena",
			"Alice",
			"Dmytro",
			"Sofiia",
			"Maksym",
			"Iryna",
		];
		function getFirstLettersOfNames(names) {
			return names.map((name) => name[0]);
		}
		const firstLettersOfNames = getFirstLettersOfNames(names);
		console.log(firstLettersOfNames);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 10. Дано масив цін у грн.Податок складає 20 %.Сформувати масив, який буде містити величину сплаченого податку у грн.
	{
		const prices = [
			19.99, 45.5, 1200.0, 8.75, 2990.9, 54.2, 15.0, 8900.99, 210.4, 33.1,
		];
		function calculatePaidTaxes(prices, taxPercentage) {
			return prices.map(
				(price) => Math.round(100 * ((price * taxPercentage) / 100)) / 100,
			);
		}
		const taxPercentage = 20;
		const paidTaxes = calculatePaidTaxes(prices, taxPercentage);
		console.log(paidTaxes);
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
}
