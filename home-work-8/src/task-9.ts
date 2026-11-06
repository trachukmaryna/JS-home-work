//Морський бій.
// Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів.
// Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель.
// Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

if (confirm('Почати?')) {
	const fieldSize: number = parseInt(prompt('Введіть розмір поля (кількість клітинок)') ?? '')
	const singleDeckShipsCount: number = parseInt(prompt('Введіть кількість одиночних кораблів') ?? '')
	if (!isFinite(fieldSize) || !isFinite(singleDeckShipsCount) || singleDeckShipsCount <= 0 || fieldSize <= 0 || singleDeckShipsCount > fieldSize) throw new Error("Некоректні дані")

	//-------------------скільки клітинок у полі---скільки кораблів треба поставити
	function createGameBoard(fieldSize: number, singleDeckShipsCount: number): number[] {
		//поле — масив клітинок з 0 і 1
		let gameBoard: number[] = []
		for (let i = 0; i < fieldSize; i++) {
			gameBoard.push(0)
		}
		//скільки кораблів вже поставили
		let placedShipsCount: number = 0
		while (placedShipsCount < singleDeckShipsCount) {
			//номер клітинки, яка випала навмання
			const randomCellIndex: number = Math.floor(Math.random() * fieldSize)
			if (gameBoard[randomCellIndex] === 0) {
				gameBoard[randomCellIndex] = 1
				placedShipsCount++
			}
		}
		return gameBoard
	}
	const gameBoard: number[] = createGameBoard(fieldSize, singleDeckShipsCount)

	let remainingShipsCount: number = singleDeckShipsCount

	while (remainingShipsCount > 0) {
		const shot: number = parseInt(prompt('В яку клітинку стріляємо?') ?? '')
		const shotCellIndex: number = shot - 1
		if (gameBoard[shotCellIndex] === 1) {
			alert('Влучив')
			gameBoard[shotCellIndex] = 0
			remainingShipsCount--
		} else alert('Промазав')
	}
	alert('Усі кораблі потоплено!')
}
