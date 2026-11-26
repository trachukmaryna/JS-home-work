// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.Наприклад, для масиву[1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
if (confirm('Shall we begin? Exercise № 1')) {
	const array: number[] = [1, 2, 3]
	function generatePossibleSubsetsOfArray(array: number[], currentIndex: number, currentSubset: number[]): number[][] {
		if (currentIndex === array.length)
			return [currentSubset]
		const subsetsExcludingCurrent: number[][] = generatePossibleSubsetsOfArray(array, currentIndex + 1, currentSubset)
		const subsetsWithCurrent: number[][] = generatePossibleSubsetsOfArray(array, currentIndex + 1, [...currentSubset, array[currentIndex]])
		return [...subsetsExcludingCurrent, ...subsetsWithCurrent]
	}
	const possibleSubsetsOfArray: number[][] = generatePossibleSubsetsOfArray(array, 0, [])
	console.log(possibleSubsetsOfArray)
}
// Задача 2.  Дано масив імен спортсменів.Розробити програму для виведення усіх можливих результатів змагань(списки імен у відповідності до місць, які вони займуть).
if (confirm('Shall we begin? Exercise № 2')) {
	const athletes: string[] = ["Oleksandr Usyk", "Elina Svitolina", "Lionel Messi"]
	function generateAllPossibleCompetitionResults(remainingAthletes: string[], podium: string[]): string[][] {
		if (remainingAthletes.length === 0)
			return [podium]
		const allPossibleResults: string[][] = []
		for (let i = 0; i < remainingAthletes.length; i++) {
			const currentAthlete: string = remainingAthletes[i]
			const newPodium: string[] = [...podium, currentAthlete]
			const newRemainingAthletes: string[] = remainingAthletes.filter((_, index) => index !== i)
			const resultsWithCurrentAthlete: string[][] = generateAllPossibleCompetitionResults(newRemainingAthletes, newPodium)
			allPossibleResults.push(...resultsWithCurrentAthlete)
		}
		return allPossibleResults
	}
	const allPossibleCompetitionResults: string[][] = generateAllPossibleCompetitionResults(athletes, [])
	console.log(allPossibleCompetitionResults)
}
// Задача 3. Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики - нулики”, починаючи з деякої заданої ситуації(тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок(де пробіли).Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
if (confirm('Shall we begin? Exercise № 3')) {
	type Cell = '0' | 'X' | ' '
	type Player = '0' | 'X'

	const board: Cell[][] = [
		['0', ' ', 'X'],
		[' ', ' ', '0'],
		['X', '0', 'X']
	]
	// currentBoard - дошка в поточний момент.
	// currentPlayer - хто зараз ходить
	function generatePossibleSubsequentMoveCombinations(currentBoard: Cell[][], currentPlayer: Player): Cell[][][] {
		let hasEmptyCell: boolean = false
		for (const row of currentBoard) {
			for (const cell of row) {
				if (cell === ' ') hasEmptyCell = true
			}
		}
		if (!hasEmptyCell)
			return [currentBoard]
		const allPossibleResults: Cell[][][] = []
		const nextPlayer: Player = currentPlayer === '0' ? 'X' : '0'
		for (let row = 0; row < currentBoard.length; row++) {
			for (let col = 0; col < currentBoard[row].length; col++) {
				if (currentBoard[row][col] === ' ') {
					const newBoard: Cell[][] = currentBoard.map((boardRow) => [...boardRow])
					newBoard[row][col] = currentPlayer
					const resultsAfterThisMove: Cell[][][] = generatePossibleSubsequentMoveCombinations(newBoard, nextPlayer)
					allPossibleResults.push(...resultsAfterThisMove)
				}
			}
		}
		return allPossibleResults
	}
	const possibleSubsequentMoveCombinations: Cell[][][] = generatePossibleSubsequentMoveCombinations(board, 'X')
	console.log(possibleSubsequentMoveCombinations)
}
// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
if (confirm('Shall we begin? Exercise № 4')) {
	const boys: string[] = ['Oleksandr', 'Maksym', 'Artem', 'Dmytro', 'Bohdan']
	const girls: string[] = ['Sofiia', 'Anna', 'Mariia', 'Viktoriia', 'Daryna']

	function generateAllPossibleDanceCombinationsBoysAndGirls(boys: string[], girls: string[]): string[][] {
		const danceСouples: string[][] = []
		for (const boy of boys) {
			for (const girl of girls) {
				danceСouples.push([boy, girl])
			}
		}
		return danceСouples
	}

	const allPossibleDanceCombinationsBoysAndGirls: string[][] = generateAllPossibleDanceCombinationsBoysAndGirls(boys, girls)
	console.log(allPossibleDanceCombinationsBoysAndGirls)
}
// Задача 5.  З використанням замикань розробити ітератор, тобто функцію, 
// що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення.З використанням цієї функції реалізувати перебір номерів місяців.
if (confirm('Shall we begin? Exercise № 5')) {
	function createCyclicIterator(minNumber: number, maxNumber: number): () => number {
		let currentValue: number = minNumber
		return () => {
			const valueToReturn: number = currentValue
			if (currentValue === maxNumber) currentValue = minNumber
			else currentValue += 1
			return valueToReturn
		}
	}
	const firstMonth: number = 1
	const endMonth: number = 12
	const getNextMonth: () => number = createCyclicIterator(firstMonth, endMonth)

	const numberOfRepetitions: number = 15

	for (let i = 0; i < numberOfRepetitions; i++) {
		console.log(getNextMonth())
	}
}
// Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова.
// Підрахувати кількість вгаданих букв.
if (confirm('Shall we begin? Exercise № 6')) {
	function createWordIterator(word: string): () => string {
		let currentLetterIndex: number = 0
		return () => {
			const currentLetter: string = word[currentLetterIndex]
			currentLetterIndex += 1
			return currentLetter
		}
	}
	const correctTranslation: string = 'dog'
	const wordDescription: string = 'A barking pet'

	const getNextLetter: () => string = createWordIterator(correctTranslation)
	let guessedLettersCount: number = 0
	alert(wordDescription)

	for (let i = 1; i <= correctTranslation.length; i++) {
		const expectedLetter: string = getNextLetter()
		const letter: string = prompt(`Enter a ${i} letter`) ?? ''
		if (expectedLetter === letter.toLowerCase()) guessedLettersCount++
	}

	alert(`The chosen word: ${correctTranslation}. Letters guessed: ${guessedLettersCount}`)
}
// Задача 7. Тренажер додавання.Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
if (confirm('Shall we begin? Exercise № 7')) {
	const minValue: number = 0
	const maxValue: number = 9

	function getRandomNumber(minValue: number, maxValue: number): number {
		return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
	}

	function askAdditionExample(minNumber: number, maxNumber: number): boolean {
		const firstNumber: number = getRandomNumber(minNumber, maxNumber)
		const secondNumber: number = getRandomNumber(minNumber, maxNumber)
		const correctSum: number = firstNumber + secondNumber
		const userAnswer: string | null = prompt(`${firstNumber} + ${secondNumber} = ?`)
		if (userAnswer === null)
			return false
		const userNumberAnswer: number = parseInt(userAnswer)
		if (!isFinite(userNumberAnswer) || userNumberAnswer < 0) {
			alert('Invalid data.Enter a number.')
			return true
		}
		if (userNumberAnswer === correctSum) alert(`Correct`)
		else alert(`Wrong, the answer is ${correctSum}`)
		return true
	}

	const intervalMs: number = 10000
	const intervalId: number = setInterval(() => {
		const shouldContinue: boolean = askAdditionExample(minValue, maxValue)
		if (!shouldContinue) clearInterval(intervalId)
	}, intervalMs)
}
// Задача 8. При старті питаємо у користувача чи хоче він читати новини.
// Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net.
// Для цього через 20 секунд після відкриття треба виконати команду
// window.location.href = 'https://www.ukr.net/'
if (confirm('Shall we begin? Exercise № 8')) {
	const websiteAddress: string = 'https://www.ukr.net/'
	const delayInMilliseconds: number = 20000

	function goToWebsite(websiteAddress: string): void {
		window.location.href = websiteAddress
	}

	const wantsToReadNews: boolean = confirm(`Do you want to read the news?`)

	if (wantsToReadNews) goToWebsite(websiteAddress)
	else setTimeout(() => {
		goToWebsite(websiteAddress)
	}, delayInMilliseconds)
}

