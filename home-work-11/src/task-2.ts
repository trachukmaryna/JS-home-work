//Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень
// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
// 3) загальний прибуток за робочі дні
// 4) загальний прибуток за вихідні дні
// 5) максимальний прибуток за середу
// 6) сформувати загальний список(одновимірний масив) зі значенням, які що більші за 200
// 7) відсортувати кожен тиждень за зростанням
// 8) відсортувати тижні(рядки) за спаданням максимального елементи у цьому тижні(рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

if (confirm('Shall we begin??')) {
	const storesCount: number = parseInt(prompt('Enter the number of stores') ?? '')
	const daysCount: number = 7
	if (!isFinite(storesCount) || storesCount <= 1) throw new Error("Incorrect data")

	const minProfit: number = 0
	const maxProfit: number = 500

	//---------------------------------------------------------------------------------------------------------------------------------------
	// 0. Генерація таблиці
	function getRandomNumber(minProfit: number, maxProfit: number): number {
		return minProfit + Math.floor(Math.random() * (maxProfit - minProfit + 1))
	}
	function getRandomRow(daysCount: number, minProfit: number, maxProfit: number): number[] {
		return Array.from({ length: daysCount }, () =>
			getRandomNumber(minProfit, maxProfit),
		)
	}
	function getRandomTable(storesCount: number, daysCount: number, minProfit: number, maxProfit: number): number[][] {
		return Array.from({ length: storesCount }, () => getRandomRow(daysCount, minProfit, maxProfit))
	}
	const weeklyProfits: number[][] = getRandomTable(storesCount, daysCount, minProfit, maxProfit)
	console.table(weeklyProfits)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 1) загальний прибуток кожного магазину за тиждень
	function calculateProfitOfEachStoreForWeek(weeklyProfits: number[][]): number[] {
		return weeklyProfits.map((row) => row
			.reduce((weekSum, dayProfit) => weekSum + dayProfit, 0)
		)
	}
	const profitOfEachStoreForWeek: number[] = calculateProfitOfEachStoreForWeek(weeklyProfits)
	console.log(profitOfEachStoreForWeek)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 2) загальний прибуток усіх магазинів по дням(загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)
	// function calculateTotalProfitOfAllStoresByDay(weeklyProfits: number[][]): number[] {
	// 	const totalProfit: number[] = []
	// 	for (let day = 0; day < weeklyProfits[0].length; day++) {
	// 		let daySum: number = 0
	// 		for (let store = 0; store < weeklyProfits.length; store++) {
	// 			daySum += weeklyProfits[store][day]
	// 		}
	// 		totalProfit.push(daySum)
	// 	}
	// 	return totalProfit
	// }
	// const totalProfitOfAllStoresByDay: number[] = calculateTotalProfitOfAllStoresByDay(weeklyProfits)
	// console.log(totalProfitOfAllStoresByDay)
	//=======================================================================================================
	function calculateTotalProfitOfAllStoresByDay(weeklyProfits: number[][]): number[] {
		return weeklyProfits[0].map((_, dayIndex) => weeklyProfits
			.reduce((daySum, storeRow) => daySum + storeRow[dayIndex], 0)
		)
	}
	const totalProfitOfAllStoresByDay: number[] = calculateTotalProfitOfAllStoresByDay(weeklyProfits)
	console.log(totalProfitOfAllStoresByDay)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 3. загальний прибуток за робочі дні
	// function calculateProfitForDaysRange(weeklyProfits: number[][], firstDay: number, lastDay: number): number {
	// 	let rangeSum: number = 0
	// 	for (let day = firstDay; day <= lastDay; day++) {
	// 		for (let store = 0; store < weeklyProfits.length; store++) {
	// 			rangeSum += weeklyProfits[store][day]
	// 		}
	// 	}
	// 	return rangeSum
	// }
	// const firstWorkingDay: number = 0
	// const lastWorkingDay: number = 4

	// const totalProfitForDaysRange: number = calculateProfitForDaysRange(weeklyProfits, firstWorkingDay, lastWorkingDay)
	// console.log(totalProfitForDaysRange)
	//=======================================================================================================
	function calculateProfitForDaysRange(weeklyProfits: number[][], firstDay: number, lastDay: number): number {
		return weeklyProfits.map((row) => row
			.slice(firstDay, lastDay + 1))
			.reduce((totalSum, row) => totalSum + row
				.reduce((rowSum, number) => rowSum + number, 0)
				, 0)
	}
	const firstWorkingDay: number = 0
	const lastWorkingDay: number = 4

	const totalProfitForWorkingDays: number = calculateProfitForDaysRange(weeklyProfits, firstWorkingDay, lastWorkingDay)
	console.log(totalProfitForWorkingDays)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 4. загальний прибуток за вихідні дні
	const firstWeekendDay: number = 5
	const lastWeekendDay: number = 6

	const totalProfitForWeekendDays: number = calculateProfitForDaysRange(weeklyProfits, firstWeekendDay, lastWeekendDay)
	console.log(totalProfitForWeekendDays)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 5. максимальний прибуток за середу
	// function getMaximumProfitForTheDay(weeklyProfits: number[][], dayNumber: number): number {
	// 	let maxProfit: number = 0
	// 	let dayIndex: number = dayNumber - 1
	// 	for (let store = 0; store < weeklyProfits.length; store++) {
	// 		if (weeklyProfits[store][dayIndex] > maxProfit) maxProfit = weeklyProfits[store][dayIndex]
	// 	}
	// 	return maxProfit
	// }

	// const dayNumber: number = 3 // як для людей "середа"
	// const maximumProfitForTheDay: number = getMaximumProfitForTheDay(weeklyProfits, dayNumber)
	// console.log(maximumProfitForTheDay)
	//=======================================================================================================
	function getMaximumProfitForTheDay(weeklyProfits: number[][], dayNumber: number): number {
		let dayIndex: number = dayNumber - 1
		return weeklyProfits.reduce((prewMaxValue, row) => row[dayIndex] > prewMaxValue ? row[dayIndex] : prewMaxValue, 0)
	}
	const dayNumber: number = 3 // як для людей "середа"
	const maximumProfitForTheDay: number = getMaximumProfitForTheDay(weeklyProfits, dayNumber)
	console.log(maximumProfitForTheDay)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 6. сформувати загальний список(одновимірний масив) зі значенням, які що більші за 200
	// function getProfitsAboveThreshold(weeklyProfits: number[][], thresholdValue: number): number[] {
	// 	const collectedProfits: number[] = []
	// 	for (const row of weeklyProfits) {
	// 		for (const num of row) {
	// 			if (num > thresholdValue) collectedProfits.push(num)
	// 		}
	// 	}
	// 	return collectedProfits
	// }
	// const thresholdValue: number = 200
	// const profitsAboveThreshold: number[] = getProfitsAboveThreshold(weeklyProfits, thresholdValue)
	// console.log(profitsAboveThreshold)
	//=======================================================================================================
	function getProfitsAboveThreshold(weeklyProfits: number[][], thresholdValue: number): number[] {
		return weeklyProfits.reduce((collectedProfits, row) => collectedProfits.concat(row.filter((dayProfit) => dayProfit > thresholdValue)), [])
	}
	const thresholdValue: number = 200
	const profitsAboveThreshold: number[] = getProfitsAboveThreshold(weeklyProfits, thresholdValue)
	console.log(profitsAboveThreshold)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 7) відсортувати кожен тиждень за зростанням
	// function sortEachWeekAscending(weeklyProfits: number[][]): number[][] {
	// 	const sortProfit: number[][] = []
	// 	for (const row of weeklyProfits) {
	// 		sortProfit.push(row.slice().sort((num1, num2) => num1 - num2))
	// 	}
	// 	return sortProfit
	// }

	// const eachWeekAscending: number[][] = sortEachWeekAscending(weeklyProfits)
	// console.log(eachWeekAscending)
	//=======================================================================================================
	function sortEachWeekAscending(weeklyProfits: number[][]): number[][] {
		return weeklyProfits.map((row) => row.slice().sort((dayProfitPrew, dayProfitNext) => dayProfitPrew - dayProfitNext))
	}
	const eachWeekAscending: number[][] = sortEachWeekAscending(weeklyProfits)
	console.log(eachWeekAscending)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 8) відсортувати тижні(рядки) за спаданням максимального елементи у цьому тижні(рядку), 
	// тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
	function maxNumInRow(weeklyRow: number[]): number {
		return weeklyRow.reduce((maxNum, num) => num > maxNum ? num : maxNum)
	}

	function sortWeeksByMaxElementDescending(weeklyProfits: number[][]): number[][] {
		return weeklyProfits.slice().sort((row1, row2) => maxNumInRow(row2) - maxNumInRow(row1))
	}
	const weeksByMaxElementDescending: number[][] = sortWeeksByMaxElementDescending(weeklyProfits)
	console.log(weeksByMaxElementDescending)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 9) упорядкувати тижні(рядки) за спаданням суми елементів у рядку
	// (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
	function sumInRow(weeklyRow: number[]): number {
		return weeklyRow.reduce((prewSum, num) => prewSum + num, 0)
	}

	function sortWeeksByRowSumDescending(weeklyProfits: number[][]): number[][] {
		return weeklyProfits.slice().sort((row1, row2) => sumInRow(row2) - sumInRow(row1))
	}
	const weeksByRowSumDescending: number[][] = sortWeeksByRowSumDescending(weeklyProfits)
	console.log(weeksByRowSumDescending)
	//---------------------------------------------------------------------------------------------------------------------------------------
}