//Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.

if (confirm('Почати?')) {
	function generateRandomPrizes(elementsCount: number, minValue: number, maxValue: number): number[] {
		const winningAmount: number[] = []
		for (let i = 0; i < elementsCount; i++) {
			const randomWinningAmount: number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
			winningAmount.push(randomWinningAmount)
		}
		return winningAmount
	}
	const elementsCount: number = 10
	const minValue: number = -500
	const maxValue: number = 500
	const randomPrizes: number[] = generateRandomPrizes(elementsCount, minValue, maxValue)

	let totalWinnings: number = 0

	do {
		const selectedElementNumber: number = parseInt(prompt(`Виберіть елемент від 1 до ${elementsCount}`) ?? '')
		if (!isFinite(selectedElementNumber) || selectedElementNumber <= 0 || selectedElementNumber > elementsCount) throw new Error("Некоректне число")
		const selectedBoxPrize: number = randomPrizes[selectedElementNumber - 1]
		totalWinnings += selectedBoxPrize
		alert(`У скриньці № ${selectedElementNumber} було ${selectedBoxPrize} грн`)
	} while (confirm('Продовжити гру?'))

	document.write(`Ваш виграш ${totalWinnings} грн`)
}
