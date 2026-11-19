//ЗАДАЧА № 1
//Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
// 1. номери рядків від 0 до половини, стовпці від 0 до половини
// 2. номери рядків від 0 до половини, стовпці від половини до кінця
// 3. номери рядків від половини до кінця, стовпці від 0 до половини
// 4. номери рядків від половини до кінця, стовпці від половини до кінця
// 5. Суму парних рядків
// 6. Суму непарних стовпців
// 7. У парних рядках – непарні стовпці, у непарних – парні.

if (confirm('Shall we begin??')) {
	const rowsCount: number = parseInt(prompt('Enter the number of rows') ?? '')
	const columnsCount: number = parseInt(prompt('Enter the number of columns') ?? '')
	if (!isFinite(rowsCount) || !isFinite(columnsCount) || rowsCount <= 1 || columnsCount <= 1) throw new Error("Incorrect data")

	const minValue: number = 2
	const maxValue: number = 10

	//---------------------------------------------------------------------------------------------------------------------------------------
	// 0. Генерація таблиці
	function getRandomNumber(minValue: number, maxValue: number): number {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}
	function getRandomRow(columnsCount: number, minValue: number, maxValue: number): number[] {
		return Array.from({ length: columnsCount }, () =>
			getRandomNumber(minValue, maxValue),
		)
	}
	function getRandomTable(rowsCount: number, columnsCount: number, minValue: number, maxValue: number): number[][] {
		return Array.from({ length: rowsCount }, () => getRandomRow(columnsCount, minValue, maxValue))
	}
	const randomTable: number[][] = getRandomTable(rowsCount, columnsCount, minValue, maxValue)
	console.table(randomTable)

	//---------------------------------------------------------------------------------------------------------------------------------------
	// 0.1 Розрахунок половини рядка і стовпця
	function calculateHalfRow(randomTable: number[][]): number {
		return Math.floor(randomTable.length / 2)
	}

	function calculateHalfCol(randomTable: number[][]): number {
		return Math.floor(randomTable[0].length / 2)
	}
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 1. Номери рядків від 0 до половини, стовпці від 0 до половини.
	// За допомогою for:
	// function calculateTopLeftQuarterSum(randomTable: number[][]) {
	// 	let sum: number = 0
	// 	const halfRowsCount: number = calculateHalfRow(randomTable)
	// 	const halfColumnsCount: number = calculateHalfCol(randomTable)

	// 	for (let row = 0; row < halfRowsCount; row++) {
	// 		for (let col = 0; col < halfColumnsCount; col++) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const topLeftQuarterSum: number = calculateTopLeftQuarterSum(randomTable)
	// console.log(topLeftQuarterSum)
	//===================================================================
	// За допомогою спеціальних методів:
	function calculateTopLeftQuarterSum(randomTable: number[][]): number {
		const halfRowsCount: number = calculateHalfRow(randomTable)
		const halfColumnsCount: number = calculateHalfCol(randomTable)
		return randomTable.slice(0, halfRowsCount)
			.map((row) => row.slice(0, halfColumnsCount))
			.reduce((quarterSum, row) => quarterSum + row.reduce((rowSum, number) => rowSum + number, 0), 0)
	}
	const topLeftQuarterSum: number = calculateTopLeftQuarterSum(randomTable)
	console.log(topLeftQuarterSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 2. номери рядків від 0 до половини, стовпці від половини до кінця
	// function calculateTopRightQuarterSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	const halfRowsCount: number = calculateHalfRow(randomTable)
	// 	const halfColumnsCount: number = calculateHalfCol(randomTable)
	// 	for (let row = 0; row < halfRowsCount; row++) {
	// 		for (let col = halfColumnsCount; col < randomTable[0].length; col++) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const topRightQuarterSum: number = calculateTopRightQuarterSum(randomTable)
	// console.log(topRightQuarterSum)
	//===================================================================
	function calculateTopRightQuarterSum(randomTable: number[][]): number {
		const halfRowsCount: number = calculateHalfRow(randomTable)
		const halfColumnsCount: number = calculateHalfCol(randomTable)
		return randomTable.slice(0, halfRowsCount)
			.map((row) => row.slice(halfColumnsCount))
			.reduce((quarterSum, row) => quarterSum + row.reduce((rowSum, number) => rowSum + number, 0), 0)
	}
	const topRightQuarterSum: number = calculateTopRightQuarterSum(randomTable)
	console.log(topRightQuarterSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	//3. номери рядків від половини до кінця, стовпці від 0 до половини
	// function calculateBottomLeftQuarterSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	const halfRowsCount: number = calculateHalfRow(randomTable)
	// 	const halfColumnsCount: number = calculateHalfCol(randomTable)
	// 	for (let row = halfRowsCount; row < randomTable.length; row++) {
	// 		for (let col = 0; col < halfColumnsCount; col++) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const bottomLeftQuarterSum: number = calculateBottomLeftQuarterSum(randomTable)
	// console.log(bottomLeftQuarterSum)
	//===================================================================
	function calculateBottomLeftQuarterSum(randomTable: number[][]): number {
		const halfRowsCount: number = calculateHalfRow(randomTable)
		const halfColumnsCount: number = calculateHalfCol(randomTable)
		return randomTable.slice(halfRowsCount)
			.map((row) => row.slice(0, halfColumnsCount))
			.reduce((quarterSum, row) => quarterSum + row
				.reduce((rowSum, number) => rowSum + number, 0), 0)
	}
	const bottomLeftQuarterSum: number = calculateBottomLeftQuarterSum(randomTable)
	console.log(bottomLeftQuarterSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 4. номери рядків від половини до кінця, стовпці від половини до кінця
	// function calculateBottomRightQuarterSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	const halfRowsCount: number = calculateHalfRow(randomTable)
	// 	const halfColumnsCount: number = calculateHalfCol(randomTable)
	// 	for (let row = halfRowsCount; row < randomTable.length; row++) {
	// 		for (let col = halfColumnsCount; col < randomTable[0].length; col++) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const bottomRightQuarterSum: number = calculateBottomRightQuarterSum(randomTable)
	// console.log(bottomRightQuarterSum)
	//===================================================================
	function calculateBottomRightQuarterSum(randomTable: number[][]): number {
		const halfRowsCount: number = calculateHalfRow(randomTable)
		const halfColumnsCount: number = calculateHalfCol(randomTable)
		return randomTable.slice(halfRowsCount)
			.map((row) => row.slice(halfColumnsCount))
			.reduce((quarterSum, row) => quarterSum + row.reduce((rowSum, number) => rowSum + number, 0), 0)
	}
	const bottomRightQuarterSum: number = calculateBottomRightQuarterSum(randomTable)
	console.log(bottomRightQuarterSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 5. Суму парних рядків
	// function calculateEvenRowsSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	for (let row = 0; row < randomTable.length; row += 2) {
	// 		for (let col = 0; col < randomTable[0].length; col++) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const evenRowsSum: number = calculateEvenRowsSum(randomTable)
	// console.log(evenRowsSum)
	//===================================================================
	function calculateEvenRowsSum(randomTable: number[][]): number {
		return randomTable.filter((_, index) => index % 2 === 0)
			.reduce((evenRowsSum, row) => evenRowsSum + row
				.reduce((rowSum, number) => rowSum + number, 0), 0)
	}
	const evenRowsSum: number = calculateEvenRowsSum(randomTable)
	console.log(evenRowsSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 6. Суму непарних стовпців
	// function calculateOddColumnsSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	for (let row = 0; row < randomTable.length; row++) {
	// 		for (let col = 1; col < randomTable[0].length; col += 2) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const oddColumnsSum: number = calculateOddColumnsSum(randomTable)
	// console.log(oddColumnsSum)
	//===================================================================
	function calculateOddColumnsSum(randomTable: number[][]): number {
		return randomTable.map((row) => row
			.filter((_, index) => index % 2 !== 0))
			.reduce(((oddSum, row) => oddSum + row
				.reduce((rowSum, number) => rowSum + number, 0)), 0)
	}
	const oddColumnsSum: number = calculateOddColumnsSum(randomTable)
	console.log(oddColumnsSum)
	//---------------------------------------------------------------------------------------------------------------------------------------
	// 7.  У парних рядках – непарні стовпці, у непарних – парні.
	// function calculateCheckerboardSum(randomTable: number[][]): number {
	// 	let sum: number = 0
	// 	for (let row = 0; row < randomTable.length; row += 2) {
	// 		for (let col = 1; col < randomTable[0].length; col += 2) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	for (let row = 1; row < randomTable.length; row += 2) {
	// 		for (let col = 0; col < randomTable[0].length; col += 2) {
	// 			sum += randomTable[row][col]
	// 		}
	// 	}
	// 	return sum
	// }
	// const checkerboardSum: number = calculateCheckerboardSum(randomTable)
	// console.log(checkerboardSum)
	//===================================================================
	function calculateCheckerboardSum(randomTable: number[][]): number {
		return randomTable.map((row, rowIndex) => row
			.filter((_, colIndex) => (rowIndex + colIndex) % 2 !== 0)
			.reduce((rowSum, number) => rowSum + number, 0)
		).reduce((checkerboardSum, rowSum) => checkerboardSum + rowSum, 0)
	}
	const checkerboardSum: number = calculateCheckerboardSum(randomTable)
	console.log(checkerboardSum)
} 
