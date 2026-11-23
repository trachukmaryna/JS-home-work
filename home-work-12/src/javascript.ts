if (confirm('Begin ?')) {
	//Генерування масиву 30 випадкових цілих чисел
	const minValue: number = 0
	const maxValue: number = 10
	const arrayLength: number = 30


	function getRandomNumber(minValue: number, maxValue: number): number {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}
	function generateRandomArray(minValue: number, maxValue: number, arrayLength: number): number[] {
		return Array.from({ length: arrayLength }, () =>
			getRandomNumber(minValue, maxValue),
		)
	}
	const randomArray: number[] = generateRandomArray(minValue, maxValue, arrayLength)
	console.log(randomArray)

	function printArrayState(array: number[]): void {
		console.log(`${array.join(" , ")}`)
	}

	//=================================================================================================================================
	//Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
	function bubbleSortSwapCount(array: number[], isShowSteps: boolean): number {
		const copyArray: number[] = array.slice()
		let changeStatus: boolean
		let lastIndex: number = array.length
		let swapCount: number = 0

		do {
			changeStatus = false
			for (let i = 1; i < lastIndex; i++) {
				if (copyArray[i - 1] > copyArray[i]) {
					const temporaryChange: number = copyArray[i - 1]
					copyArray[i - 1] = copyArray[i]
					copyArray[i] = temporaryChange
					changeStatus = true
					swapCount++
					if (isShowSteps) printArrayState(copyArray)
				}
			}
			lastIndex--
		} while (changeStatus)
		return swapCount
	}

	const bubbleSortCount: number = bubbleSortSwapCount(randomArray, false)
	console.log(bubbleSortCount)
	//=================================================================================================================================
	//Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
	function countCocktailSortSwaps(array: number[], isShowSteps: boolean): number {
		const copyArray: number[] = array.slice()
		let changeStatus: boolean
		let startIndex: number = 1
		let lastIndex: number = array.length - 1
		let swapCount: number = 0

		do {
			changeStatus = false
			for (let i = startIndex; i <= lastIndex; i++) {
				if (copyArray[i - 1] > copyArray[i]) {
					const temporaryChange: number = copyArray[i - 1]
					copyArray[i - 1] = copyArray[i]
					copyArray[i] = temporaryChange
					changeStatus = true
					swapCount++
					if (isShowSteps) printArrayState(copyArray)
				}
			}
			lastIndex--

			if (changeStatus === false) break

			changeStatus = false
			for (let i = lastIndex; i >= startIndex; i--) {
				if (copyArray[i - 1] > copyArray[i]) {
					const temporaryChange: number = copyArray[i - 1]
					copyArray[i - 1] = copyArray[i]
					copyArray[i] = temporaryChange
					changeStatus = true
					swapCount++
					if (isShowSteps) printArrayState(copyArray)
				}
			}
			startIndex++
		} while (changeStatus)

		return swapCount
	}

	const cocktailSortSwaps: number = countCocktailSortSwaps(randomArray, false)
	console.log(cocktailSortSwaps)
	//=================================================================================================================================
	// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
	function insertionSortSwapCount(array: number[], isShowSteps: boolean): number {
		const copyArray: number[] = array.slice()
		let swapCount: number = 0
		for (let i = 1; i < copyArray.length; i++) {
			const currentElement: number = copyArray[i]
			let neighboringElementOnLeft: number = i - 1
			while (neighboringElementOnLeft >= 0 && copyArray[neighboringElementOnLeft] > currentElement) {
				copyArray[neighboringElementOnLeft + 1] = copyArray[neighboringElementOnLeft]
				neighboringElementOnLeft--
				swapCount++
				if (isShowSteps) printArrayState(copyArray)
			}
			copyArray[neighboringElementOnLeft + 1] = currentElement
			if (isShowSteps) printArrayState(copyArray)
		}
		return swapCount
	}
	const insertionSortSwap: number = insertionSortSwapCount(randomArray, false)
	console.log(insertionSortSwap)
	//=================================================================================================================================
	//Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
	// Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
	const demoArr: number[] = [3, 2, 4, 1, 5]
	console.log(`Bubble sort:`)
	bubbleSortSwapCount(demoArr, true)
	//-----------------------------------------
	console.log(`Cocktail sort:`)
	countCocktailSortSwaps(demoArr, true)
	//-----------------------------------------
	console.log(`Insertion sort:`)
	insertionSortSwapCount(demoArr, true)
	//=================================================================================================================================
	//Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
	const nameArray: string[] = ['Anna', 'Maria', 'Olga', 'Elena', 'Oksana']

	function sortNamesAlphabetically(arrayText: string[]): string[] {
		let changeStatus: boolean
		const copyArray: string[] = arrayText.slice()
		let endIndex: number = copyArray.length
		do {
			changeStatus = false
			for (let i = 1; i < endIndex; i++) {
				if (copyArray[i - 1] > copyArray[i]) {
					const temp: string = copyArray[i - 1]
					copyArray[i - 1] = copyArray[i]
					copyArray[i] = temp
					changeStatus = true
				}
			}
			endIndex--
		} while (changeStatus)
		return copyArray
	}

	const sortedNames: string[] = sortNamesAlphabetically(nameArray)

	function binarySearch(sortedNames: string[], searchEl: string): number {
		let startIndex: number = 0
		let endIndex: number = sortedNames.length - 1
		while (startIndex <= endIndex) {
			const middleIndex: number = Math.floor((startIndex + endIndex) / 2)
			if (sortedNames[middleIndex] === searchEl)
				return middleIndex
			if (sortedNames[middleIndex] < searchEl)
				startIndex = middleIndex + 1
			else if (sortedNames[middleIndex] > searchEl)
				endIndex = middleIndex - 1
		}
		return -1
	}

	const searchName: string = 'Olga'
	const foundIndex: number = binarySearch(sortedNames, searchName)

	if (foundIndex === -1) console.log(`No ${searchName} name`)
	else console.log(`The name ${searchName} is located at index: ${foundIndex}`)
	//=================================================================================================================================
	//Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
	function sortNamesByLength(arrayText: string[]): string[] {
		let changeStatus: boolean
		const copyArray: string[] = arrayText.slice()
		let endIndex: number = copyArray.length
		do {
			changeStatus = false
			for (let i = 1; i < endIndex; i++) {
				if (copyArray[i - 1].length > copyArray[i].length) {
					const temp: string = copyArray[i - 1]
					copyArray[i - 1] = copyArray[i]
					copyArray[i] = temp
					changeStatus = true
				}
			}
			endIndex--
		} while (changeStatus)
		return copyArray
	}
	const namesSorted: string[] = sortNamesByLength(nameArray)

	function binarySearchByLength(sortedNames: string[], searchElLength: number): number {
		let startIndex: number = 0
		let endIndex: number = sortedNames.length - 1
		while (startIndex <= endIndex) {
			const middleIndex: number = Math.floor((startIndex + endIndex) / 2)
			if (sortedNames[middleIndex].length === searchElLength)
				return middleIndex
			if (sortedNames[middleIndex].length < searchElLength)
				startIndex = middleIndex + 1
			else if (sortedNames[middleIndex].length > searchElLength)
				endIndex = middleIndex - 1
		}
		return -1
	}

	const searchElLength: number = 5
	const indexFound: number = binarySearchByLength(namesSorted, searchElLength)

	if (indexFound === -1) console.log(`No name with length ${searchElLength}`)
	else console.log(`Name with length ${searchElLength} is at index: ${indexFound}`)
	//=================================================================================================================================
	// Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
	type DayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7

	const rowsCount: number = 4
	const columnsCount: number = 8
	const minVal: number = 1
	const maxVal: number = 7
	const sundayNumber: DayNumber = 7

	function getRandomNum(minVal: number, maxVal: number): DayNumber {
		return (minVal + Math.floor(Math.random() * (maxVal - minVal + 1))) as DayNumber
	}

	function getRandomRow(columnsCount: number, minVal: number, maxVal: number): DayNumber[] {
		return Array.from({ length: columnsCount }, () =>
			getRandomNum(minVal, maxVal),
		)
	}
	function getRandomTable(rowsCount: number, columnsCount: number, minVal: number, maxVal: number): DayNumber[][] {
		return Array.from({ length: rowsCount }, () => getRandomRow(columnsCount, minVal, maxVal))
	}

	const randomTable: DayNumber[][] = getRandomTable(rowsCount, columnsCount, minVal, maxVal)
	console.table(randomTable)

	function countSundaysPerRow(randomTable: DayNumber[][], sundayNumber: DayNumber): number[] {
		const sundaysCountPerRow: number[] = []
		for (let row = 0; row < randomTable.length; row++) {
			let rowCount: number = 0
			for (let col = 0; col < randomTable[row].length; col++) {
				if (randomTable[row][col] === sundayNumber) {
					rowCount++
				}
			}
			sundaysCountPerRow.push(rowCount)
		}
		return sundaysCountPerRow
	}

	const sundaysPerRow: number[] = countSundaysPerRow(randomTable, sundayNumber)
	console.log(sundaysPerRow)
}