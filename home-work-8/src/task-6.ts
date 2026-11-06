//Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]

if (confirm('Почати?')) {
	const productsPrices: number[] = [1000, 20, 31]
	const productsTitles: string[] = ['cheese', 'juice', 'bread']
	const moneyAmount: number = parseFloat(prompt('Введіть кількість грошей') ?? '')
	if (!isFinite(moneyAmount) || moneyAmount < 0) throw new Error("Некоректна сума")

	function getAffordableProducts(prices: number[], titles: string[], money: number): string[] {
		let titlesArr: string[] = []
		for (let i = 0; i < prices.length; i++) {
			if (prices[i] <= money) {
				titlesArr.push(titles[i])
			}
		}
		return titlesArr
	}

	const productList: number | string[] = getAffordableProducts(productsPrices, productsTitles, moneyAmount)
	document.write(`Введених коштів вистачить на: ${productList}`)
}