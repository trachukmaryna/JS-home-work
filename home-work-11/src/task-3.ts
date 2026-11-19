// Задача 3. Морський бій.
// Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
// Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

if (confirm('Shall we begin??')) {

	const fieldSize: number = 6
	const countShip: number = 5
	const shellsCount: number = 3

	if (countShip > fieldSize * fieldSize) throw new Error("Incorrect data")
	// 1. Створення поля
	function createTable(fieldSize: number): number[][] {
		return Array.from({ length: fieldSize }, () => new Array(fieldSize).fill(0))
	}
	const table: number[][] = createTable(fieldSize)
	console.table(table)
	//---------------------------------------------------------------------------------------------------
	// 2. Розстановка кораблів
	function placeShips(table: number[][], countShip: number): number[][] {
		let count: number = 0
		while (count < countShip) {
			const randomRow: number = Math.floor(Math.random() * table.length)
			const randomCol: number = Math.floor(Math.random() * table[0].length)
			if (table[randomRow][randomCol] === 0) {
				table[randomRow][randomCol] = 1
				count++
			}
		}
		return table
	}
	const place: number[][] = placeShips(table, countShip)
	console.table(place)
	//---------------------------------------------------------------------------------------------------
	// 3. Постріл
	function makeShot(place: number[][], row: number, col: number): boolean {
		let shot: boolean = true
		if (place[row][col] === 1) {
			place[row][col] = 0//влучив
		}
		else shot = false //не влучив
		return shot
	}
	//---------------------------------------------------------------------------------------------------
	// 4. Гра
	let sunkShipsCount: number = 0
	let usedShellsCount: number = 0

	while (sunkShipsCount < countShip && usedShellsCount < shellsCount) {
		const numOfRow: number = parseInt(prompt('Enter the line number') ?? '')
		const numOfCol: number = parseInt(prompt('Enter the column number') ?? '')
		if (!isFinite(numOfRow) || !isFinite(numOfCol) || numOfRow > fieldSize || numOfCol > fieldSize || numOfRow < 1 || numOfCol < 1) {
			alert('There is no such cell.')
			continue
		}

		const rowIndex: number = numOfRow - 1
		const colIndex: number = numOfCol - 1
		const isHit: boolean = makeShot(place, rowIndex, colIndex)
		usedShellsCount++
		if (isHit) {
			sunkShipsCount++
			alert('Hit')
		}
		else alert('Miss')
	}

	if (sunkShipsCount === countShip) alert('Victory')
	else alert(`The shells ran out. Ships remaining: ${countShip - sunkShipsCount}`)
}