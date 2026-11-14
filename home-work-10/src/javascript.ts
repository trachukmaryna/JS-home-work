if (confirm('Begin ?')) {
	//----------------------------------------------------------------------------------------------------------------------
	//	Дано історію цін на цінні папери за деякий період(згенерувати від 1 до 10000)
	const period: number = parseInt(prompt('For what period should the price history be shown?') ?? '')
	if (!isFinite(period) || period <= 0) throw new Error("Invalid period")
	const minPrice: number = 1
	const maxPrice: number = 10000
	const thresholdValue: number = 1000

	function generateSecurityPrices(period: number, minPrice: number, maxPrice: number): number[] {
		const prices: number[] = new Array(period).fill(0)
		return prices.map(() => Math.floor(Math.random() * (maxPrice - minPrice + 1) + minPrice))
	}
	const priceHistory: number[] = generateSecurityPrices(period, minPrice, maxPrice)
	console.log(priceHistory)
	//----------------------------------------------------------------------------------------------------------------------
	//Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
	function getPricesAboveThreshold(prices: number[], thresholdValue: number): number[] {
		return prices.filter((price) => price > thresholdValue)
	}
	const pricesAboveThreshold: number[] = getPricesAboveThreshold(priceHistory, thresholdValue)
	console.log(pricesAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
	function getPricesIndicesAboveThreshold(prices: number[], thresholdValue: number): number[] {
		return prices.map((price, index) => price > thresholdValue ? index : -1).filter((priceIndex) => priceIndex >= 0)
	}
	const pricesIndicesAboveThreshold: number[] = getPricesIndicesAboveThreshold(priceHistory, thresholdValue)
	console.log(pricesIndicesAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Сформувати список з тих цін, які більші за попереднє значення
	function getPricesHigherThanPrevious(prices: number[]): number[] {
		return prices.filter((price, indexPrice, basePricesArray) => basePricesArray[indexPrice - 1] < price)
	}
	const pricesHigherThanPrevious: number[] = getPricesHigherThanPrevious(priceHistory)
	console.log(pricesHigherThanPrevious)
	//----------------------------------------------------------------------------------------------------------------------
	//Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
	function getPricesAsPercentageOfMax(prices: number[]): number[] {
		const highestPrice: number = prices.reduce((currentMax, price) => (price > currentMax ? price : currentMax))
		return prices.map((price) => Math.round(100 * (price / highestPrice) * 100) / 100)
	}
	const pricesAsPercentageOfMax: number[] = getPricesAsPercentageOfMax(priceHistory)
	console.log(pricesAsPercentageOfMax)
	//----------------------------------------------------------------------------------------------------------------------
	//Підрахувати кількість змін цін
	function getPriceChangesCount(prices: number[]): number {
		return prices.reduce((changesCount, price, indexPrice, basePricesArray) => (basePricesArray[indexPrice - 1] < price || basePricesArray[indexPrice - 1] > price ? changesCount + 1 : changesCount), 0)
	}
	const priceChangesCount: number = getPriceChangesCount(priceHistory)
	console.log(priceChangesCount)
	//----------------------------------------------------------------------------------------------------------------------
	//Визначити, чи є ціна, що менше 1000
	function hasPriceBelowThreshold(prices: number[], thresholdValue: number): boolean {
		return prices.some((price) => price < thresholdValue)
	}
	const isPriceBelowThresholdFound: boolean = hasPriceBelowThreshold(priceHistory, thresholdValue)
	console.log(isPriceBelowThresholdFound)
	//----------------------------------------------------------------------------------------------------------------------
	//Визначати, чи усі ціни більше за 1000
	function areAllPricesAboveThreshold(prices: number[], thresholdValue: number): boolean {
		return prices.every((price) => price > thresholdValue)
	}
	const allPricesAboveThreshold: boolean = areAllPricesAboveThreshold(priceHistory, thresholdValue)
	console.log(allPricesAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Підрахувати кількість цін, що більше за 1000
	function getPricesAboveThresholdCount(prices: number[], thresholdValue: number): number {
		return prices.reduce((aboveThresholdCount, price) => (price > thresholdValue ? aboveThresholdCount + 1 : aboveThresholdCount), 0)
	}
	const pricesAboveThresholdCount: number = getPricesAboveThresholdCount(priceHistory, thresholdValue)
	console.log(pricesAboveThresholdCount)
	//----------------------------------------------------------------------------------------------------------------------
	//Підрахувати суму цін, що більше за 1000
	function getSumOfPricesAboveThreshold(prices: number[], thresholdValue: number): number {
		return prices.reduce((prevSum, price) => (price > thresholdValue ? prevSum + price : prevSum), 0)
	}
	const sumOfPricesAboveThreshold: number = getSumOfPricesAboveThreshold(priceHistory, thresholdValue)
	console.log(sumOfPricesAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Знайти першу ціну, що більше за 1000
	function findFirstPriceAboveThreshold(prices: number[], thresholdValue: number): number | undefined {
		return prices.find((price) => price > thresholdValue)
	}
	const firstPriceAboveThreshold: number | undefined = findFirstPriceAboveThreshold(priceHistory, thresholdValue)
	if (firstPriceAboveThreshold === undefined) console.log('There are no such prices.')
	else console.log(firstPriceAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Знайти індекс першої ціни, що більше за 1000
	function findFirstPriceAboveThresholdIndex(prices: number[], thresholdValue: number): number {
		return prices.findIndex((price) => price > thresholdValue)
	}
	const firstPriceAboveThresholdIndex: number = findFirstPriceAboveThresholdIndex(priceHistory, thresholdValue)
	if (firstPriceAboveThresholdIndex === -1) console.log('There are no such prices.')
	else console.log(firstPriceAboveThresholdIndex)
	//----------------------------------------------------------------------------------------------------------------------
	//Знайти останню ціну, що більше за 1000
	function findLastPriceAboveThreshold(prices: number[], thresholdValue: number): number | undefined {
		return prices.findLast((price) => price > thresholdValue)
	}
	const lastPriceAboveThreshold: number | undefined = findLastPriceAboveThreshold(priceHistory, thresholdValue)
	if (lastPriceAboveThreshold === undefined) console.log('There are no such prices.')
	else console.log(lastPriceAboveThreshold)
	//----------------------------------------------------------------------------------------------------------------------
	//Знайти індекс останньої ціни, що більше за 1000
	function findLastPriceAboveThresholdIndex(prices: number[], thresholdValue: number): number {
		return prices.findLastIndex((price) => price > thresholdValue)
	}
	const lastPriceAboveThresholdIndex: number = findLastPriceAboveThresholdIndex(priceHistory, thresholdValue)
	if (lastPriceAboveThresholdIndex === -1) console.log('There are no such prices.')
	else console.log(lastPriceAboveThresholdIndex)
}