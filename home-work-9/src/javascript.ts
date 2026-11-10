if (confirm('Begin ?')) {
	//1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.
	{
		const elementsCount: number = parseInt(prompt('Enter the number of elements') ?? '')
		if (!isFinite(elementsCount) || elementsCount <= 0) throw new Error('Incorrect number of elements')

		function createZeroFilledArray(elementsCount: number): number[] {
			const zeroFilledArray: number[] = new Array(elementsCount)
			for (let i = 0; i < zeroFilledArray.length; i++) {
				zeroFilledArray[i] = 0
			}

			//Або const zeroFilledArray: number[] = new Array(elementsCount).fill(0)
			return zeroFilledArray
		}

		const zeroFilledArray: number[] = createZeroFilledArray(elementsCount)
		console.log(zeroFilledArray)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	//2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
	{
		const elementsCount: number = parseInt(prompt('Enter the number of elements') ?? '')
		if (!isFinite(elementsCount) || elementsCount <= 0) throw new Error('Incorrect number of elements')

		function createOnesAndSevensArray(elementsCount: number): number[] {
			const onesAndSevensArray: number[] = new Array(elementsCount)
			const middleIndex: number = Math.floor(onesAndSevensArray.length / 2)
			onesAndSevensArray.fill(1, 0, middleIndex)
			onesAndSevensArray.fill(7, middleIndex)
			return onesAndSevensArray
		}

		const onesAndSevensArray: number[] = createOnesAndSevensArray(elementsCount)
		console.log(onesAndSevensArray)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
	{
		const elementsCount: number = parseInt(prompt('Enter the number of elements') ?? '')
		if (!isFinite(elementsCount) || elementsCount <= 0) throw new Error('Incorrect number of elements')

		function createSpecifiedOnesRestSevensArray(elementsCount: number, initialOnesCount: number): number[] {
			const specifiedOnesRestSevensArray: number[] = new Array(elementsCount)
			specifiedOnesRestSevensArray.fill(1, 0, initialOnesCount)
			specifiedOnesRestSevensArray.fill(7, initialOnesCount)
			return specifiedOnesRestSevensArray
		}
		const initialOnesCount: number = 5
		const specifiedOnesRestSevensArray: number[] = createSpecifiedOnesRestSevensArray(elementsCount, initialOnesCount)
		console.log(specifiedOnesRestSevensArray)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 4. Дано масив елементів. Вивести на екран елементи, що більші за 100
	{
		const elementsArray: number[] = [88, 35, 100, 25, 158, 23, 963, 350, 280]

		function getElementsAboveThreshold(elementsArray: number[], thresholdValue: number): number[] {
			const elementsAboveThreshold: number[] = []
			for (const element of elementsArray) {
				if (element > thresholdValue) elementsAboveThreshold.push(element)
			}
			return elementsAboveThreshold
		}

		const thresholdValue: number = 100
		const elementsAboveThreshold: number[] = getElementsAboveThreshold(elementsArray, thresholdValue)
		console.log(elementsAboveThreshold)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 5. Дано масив елементів. Знайти добуток додатних елементів
	{
		const elementsArray: number[] = [88, 35, 100, -25, 158, 23, -963, 350, -280]

		function getPositiveElementsProduct(elementsArray: number[]): number {
			let hasPositiveElement: boolean = false
			let multiplicationResult: number = 1
			for (const element of elementsArray) {
				if (element > 0) {
					multiplicationResult *= element
					hasPositiveElement = true
				}
			}
			if (!hasPositiveElement) multiplicationResult = 0
			return multiplicationResult
		}

		const positiveElementsProduct: number = getPositiveElementsProduct(elementsArray)
		if (positiveElementsProduct === 0) console.log('None positive')
		else console.log(positiveElementsProduct)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
	{
		const elementsArray: number[] = [44, 30, 41, 45, 50, 58, 63, 68, 74, 98]

		function multiplyElementsGreaterThanFirst(elementsArray: number[], multiplier: number): number[] {
			const firstElement: number = elementsArray[0]
			elementsArray.forEach((element, index) => {
				if (element > firstElement) elementsArray[index] = element * multiplier
			})
			return elementsArray
		}
		const multiplier = 2
		const updatedElementsArray: number[] = multiplyElementsGreaterThanFirst(elementsArray, multiplier)
		console.log(updatedElementsArray)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 7.Дано масив цін.Змінити цей масив так, що на ціни товарів, які більші за 1000 грн.дати 30 % знижки.
	{
		const prices: number[] = [19.99, 45.50, 1200.00, 8.75, 2990.90, 54.20, 15.00, 8900.99, 210.40, 33.10]

		function applyDiscountToPricesAboveThreshold(prices: number[], priceThreshold: number, discountPercent: number): number[] {
			prices.forEach((price, index) => {
				if (price > priceThreshold) prices[index] = Math.round(100 * (price * (1 - (discountPercent / 100)))) / 100
			})
			return prices
		}

		const priceThreshold: number = 1000
		const discountPercent: number = 30
		const updatedPricesArray: number[] = applyDiscountToPricesAboveThreshold(prices, priceThreshold, discountPercent)
		console.log(updatedPricesArray)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 8. Дано масив номерів авто.Сформувати новий масив тих, які починаються на «А»
	{
		const licensePlateNumbers: string[] = ['AA1234BC', 'AB5678CE', 'KA9012HH', 'AE3456II', 'AA7890KK', 'BC2345MM', 'AX6789OO', 'BH1122PP', 'AA3344TT', 'CB5566XX']

		function getLicensePlatesStartingWithLetter(licensePlates: string[], startLetter: string): string[] {
			return licensePlates.filter((licensePlate) => licensePlate[0] === startLetter)
		}

		const startLetter: string = 'A'
		const licensePlatesStartingWithLetter: string[] = getLicensePlatesStartingWithLetter(licensePlateNumbers, startLetter)
		console.log(licensePlatesStartingWithLetter)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 9. Дано масив імен.Сформувати масив з перших літер цих імен.
	{
		const names: string[] = ['Alex', 'Anna', 'Bohdan', 'Andrew', 'Olena', 'Alice', 'Dmytro', 'Sofiia', 'Maksym', 'Iryna']

		function getFirstLettersOfNames(names: string[]): string[] {
			return names.map((name) => name[0])
		}

		const firstLettersOfNames: string[] = getFirstLettersOfNames(names)
		console.log(firstLettersOfNames)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
	// 10. Дано масив цін у грн.Податок складає 20 %.Сформувати масив, який буде містити величину сплаченого податку у грн.
	{
		const prices: number[] = [19.99, 45.50, 1200.00, 8.75, 2990.90, 54.20, 15.00, 8900.99, 210.40, 33.10]

		function calculatePaidTaxes(prices: number[], taxPercentage: number): number[] {
			return prices.map((price) => Math.round(100 * ((price * taxPercentage) / 100)) / 100)
		}

		const taxPercentage: number = 20
		const paidTaxes: number[] = calculatePaidTaxes(prices, taxPercentage)
		console.log(paidTaxes)
	}
	//-----------------------------------------------------------------------------------------------------------------------------------
}