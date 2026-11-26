"use strict";
// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.Наприклад, для масиву[1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
if (confirm('Shall we begin? Exercise № 1')) {
    const array = [1, 2, 3];
    function generatePossibleSubsetsOfArray(array, currentIndex, currentSubset) {
        if (currentIndex === array.length)
            return [currentSubset];
        const subsetsExcludingCurrent = generatePossibleSubsetsOfArray(array, currentIndex + 1, currentSubset);
        const subsetsWithCurrent = generatePossibleSubsetsOfArray(array, currentIndex + 1, [...currentSubset, array[currentIndex]]);
        return [...subsetsExcludingCurrent, ...subsetsWithCurrent];
    }
    const possibleSubsetsOfArray = generatePossibleSubsetsOfArray(array, 0, []);
    console.log(possibleSubsetsOfArray);
}
// Задача 2.  Дано масив імен спортсменів.Розробити програму для виведення усіх можливих результатів змагань(списки імен у відповідності до місць, які вони займуть).
if (confirm('Shall we begin? Exercise № 2')) {
    const athletes = ["Oleksandr Usyk", "Elina Svitolina", "Lionel Messi"];
    function generateAllPossibleCompetitionResults(remainingAthletes, podium) {
        if (remainingAthletes.length === 0)
            return [podium];
        const allPossibleResults = [];
        for (let i = 0; i < remainingAthletes.length; i++) {
            const currentAthlete = remainingAthletes[i];
            const newPodium = [...podium, currentAthlete];
            const newRemainingAthletes = remainingAthletes.filter((_, index) => index !== i);
            const resultsWithCurrentAthlete = generateAllPossibleCompetitionResults(newRemainingAthletes, newPodium);
            allPossibleResults.push(...resultsWithCurrentAthlete);
        }
        return allPossibleResults;
    }
    const allPossibleCompetitionResults = generateAllPossibleCompetitionResults(athletes, []);
    console.log(allPossibleCompetitionResults);
}
// Задача 3. Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики - нулики”, починаючи з деякої заданої ситуації(тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок(де пробіли).Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
if (confirm('Shall we begin? Exercise № 3')) {
    const board = [
        ['0', ' ', 'X'],
        [' ', ' ', '0'],
        ['X', '0', 'X']
    ];
    // currentBoard - дошка в поточний момент.
    // currentPlayer - хто зараз ходить
    function generatePossibleSubsequentMoveCombinations(currentBoard, currentPlayer) {
        let hasEmptyCell = false;
        for (const row of currentBoard) {
            for (const cell of row) {
                if (cell === ' ')
                    hasEmptyCell = true;
            }
        }
        if (!hasEmptyCell)
            return [currentBoard];
        const allPossibleResults = [];
        const nextPlayer = currentPlayer === '0' ? 'X' : '0';
        for (let row = 0; row < currentBoard.length; row++) {
            for (let col = 0; col < currentBoard[row].length; col++) {
                if (currentBoard[row][col] === ' ') {
                    const newBoard = currentBoard.map((boardRow) => [...boardRow]);
                    newBoard[row][col] = currentPlayer;
                    const resultsAfterThisMove = generatePossibleSubsequentMoveCombinations(newBoard, nextPlayer);
                    allPossibleResults.push(...resultsAfterThisMove);
                }
            }
        }
        return allPossibleResults;
    }
    const possibleSubsequentMoveCombinations = generatePossibleSubsequentMoveCombinations(board, 'X');
    console.log(possibleSubsequentMoveCombinations);
}
// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
if (confirm('Shall we begin? Exercise № 4')) {
    const boys = ['Oleksandr', 'Maksym', 'Artem', 'Dmytro', 'Bohdan'];
    const girls = ['Sofiia', 'Anna', 'Mariia', 'Viktoriia', 'Daryna'];
    function generateAllPossibleDanceCombinationsBoysAndGirls(boys, girls) {
        const danceСouples = [];
        for (const boy of boys) {
            for (const girl of girls) {
                danceСouples.push([boy, girl]);
            }
        }
        return danceСouples;
    }
    const allPossibleDanceCombinationsBoysAndGirls = generateAllPossibleDanceCombinationsBoysAndGirls(boys, girls);
    console.log(allPossibleDanceCombinationsBoysAndGirls);
}
// Задача 5.  З використанням замикань розробити ітератор, тобто функцію, 
// що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального.
// Якщо значення досягне максимального, то наступним буде мінімальне значення.З використанням цієї функції реалізувати перебір номерів місяців.
if (confirm('Shall we begin? Exercise № 5')) {
    function createCyclicIterator(minNumber, maxNumber) {
        let currentValue = minNumber;
        return () => {
            const valueToReturn = currentValue;
            if (currentValue === maxNumber)
                currentValue = minNumber;
            else
                currentValue += 1;
            return valueToReturn;
        };
    }
    const firstMonth = 1;
    const endMonth = 12;
    const getNextMonth = createCyclicIterator(firstMonth, endMonth);
    const numberOfRepetitions = 15;
    for (let i = 0; i < numberOfRepetitions; i++) {
        console.log(getNextMonth());
    }
}
// Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова.
// З використанням нього розробити гру «Прекладач».
// Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова.
// Підрахувати кількість вгаданих букв.
if (confirm('Shall we begin? Exercise № 6')) {
    function createWordIterator(word) {
        let currentLetterIndex = 0;
        return () => {
            const currentLetter = word[currentLetterIndex];
            currentLetterIndex += 1;
            return currentLetter;
        };
    }
    const correctTranslation = 'dog';
    const wordDescription = 'A barking pet';
    const getNextLetter = createWordIterator(correctTranslation);
    let guessedLettersCount = 0;
    alert(wordDescription);
    for (let i = 1; i <= correctTranslation.length; i++) {
        const expectedLetter = getNextLetter();
        const letter = prompt(`Enter a ${i} letter`) ?? '';
        if (expectedLetter === letter.toLowerCase())
            guessedLettersCount++;
    }
    alert(`The chosen word: ${correctTranslation}. Letters guessed: ${guessedLettersCount}`);
}
// Задача 7. Тренажер додавання.Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
if (confirm('Shall we begin? Exercise № 7')) {
    const minValue = 0;
    const maxValue = 9;
    function getRandomNumber(minValue, maxValue) {
        return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
    }
    function askAdditionExample(minNumber, maxNumber) {
        const firstNumber = getRandomNumber(minNumber, maxNumber);
        const secondNumber = getRandomNumber(minNumber, maxNumber);
        const correctSum = firstNumber + secondNumber;
        const userAnswer = prompt(`${firstNumber} + ${secondNumber} = ?`);
        if (userAnswer === null)
            return false;
        const userNumberAnswer = parseInt(userAnswer);
        if (!isFinite(userNumberAnswer) || userNumberAnswer < 0) {
            alert('Invalid data.Enter a number.');
            return true;
        }
        if (userNumberAnswer === correctSum)
            alert(`Correct`);
        else
            alert(`Wrong, the answer is ${correctSum}`);
        return true;
    }
    const intervalMs = 10000;
    const intervalId = setInterval(() => {
        const shouldContinue = askAdditionExample(minValue, maxValue);
        if (!shouldContinue)
            clearInterval(intervalId);
    }, intervalMs);
}
// Задача 8. При старті питаємо у користувача чи хоче він читати новини.
// Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net.
// Для цього через 20 секунд після відкриття треба виконати команду
// window.location.href = 'https://www.ukr.net/'
if (confirm('Shall we begin? Exercise № 8')) {
    const websiteAddress = 'https://www.ukr.net/';
    const delayInMilliseconds = 20000;
    function goToWebsite(websiteAddress) {
        window.location.href = websiteAddress;
    }
    const wantsToReadNews = confirm(`Do you want to read the news?`);
    if (wantsToReadNews)
        goToWebsite(websiteAddress);
    else
        setTimeout(() => {
            goToWebsite(websiteAddress);
        }, delayInMilliseconds);
}
