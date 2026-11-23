"use strict";
if (confirm('Begin ?')) {
    //Генерування масиву 30 випадкових цілих чисел
    const minValue = 0;
    const maxValue = 10;
    const arrayLength = 30;
    function getRandomNumber(minValue, maxValue) {
        return minValue + Math.floor(Math.random() * (maxValue - minValue + 1));
    }
    function generateRandomArray(minValue, maxValue, arrayLength) {
        return Array.from({ length: arrayLength }, () => getRandomNumber(minValue, maxValue));
    }
    const randomArray = generateRandomArray(minValue, maxValue, arrayLength);
    console.log(randomArray);
    function printArrayState(array) {
        console.log(`${array.join(" , ")}`);
    }
    //=================================================================================================================================
    //Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
    function bubbleSortSwapCount(array, isShowSteps) {
        const copyArray = array.slice();
        let changeStatus;
        let lastIndex = array.length;
        let swapCount = 0;
        do {
            changeStatus = false;
            for (let i = 1; i < lastIndex; i++) {
                if (copyArray[i - 1] > copyArray[i]) {
                    const temporaryChange = copyArray[i - 1];
                    copyArray[i - 1] = copyArray[i];
                    copyArray[i] = temporaryChange;
                    changeStatus = true;
                    swapCount++;
                    if (isShowSteps)
                        printArrayState(copyArray);
                }
            }
            lastIndex--;
        } while (changeStatus);
        return swapCount;
    }
    const bubbleSortCount = bubbleSortSwapCount(randomArray, false);
    console.log(bubbleSortCount);
    //=================================================================================================================================
    //Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
    function countCocktailSortSwaps(array, isShowSteps) {
        const copyArray = array.slice();
        let changeStatus;
        let startIndex = 1;
        let lastIndex = array.length - 1;
        let swapCount = 0;
        do {
            changeStatus = false;
            for (let i = startIndex; i <= lastIndex; i++) {
                if (copyArray[i - 1] > copyArray[i]) {
                    const temporaryChange = copyArray[i - 1];
                    copyArray[i - 1] = copyArray[i];
                    copyArray[i] = temporaryChange;
                    changeStatus = true;
                    swapCount++;
                    if (isShowSteps)
                        printArrayState(copyArray);
                }
            }
            lastIndex--;
            if (changeStatus === false)
                break;
            changeStatus = false;
            for (let i = lastIndex; i >= startIndex; i--) {
                if (copyArray[i - 1] > copyArray[i]) {
                    const temporaryChange = copyArray[i - 1];
                    copyArray[i - 1] = copyArray[i];
                    copyArray[i] = temporaryChange;
                    changeStatus = true;
                    swapCount++;
                    if (isShowSteps)
                        printArrayState(copyArray);
                }
            }
            startIndex++;
        } while (changeStatus);
        return swapCount;
    }
    const cocktailSortSwaps = countCocktailSortSwaps(randomArray, false);
    console.log(cocktailSortSwaps);
    //=================================================================================================================================
    // Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
    function insertionSortSwapCount(array, isShowSteps) {
        const copyArray = array.slice();
        let swapCount = 0;
        for (let i = 1; i < copyArray.length; i++) {
            const currentElement = copyArray[i];
            let neighboringElementOnLeft = i - 1;
            while (neighboringElementOnLeft >= 0 && copyArray[neighboringElementOnLeft] > currentElement) {
                copyArray[neighboringElementOnLeft + 1] = copyArray[neighboringElementOnLeft];
                neighboringElementOnLeft--;
                swapCount++;
                if (isShowSteps)
                    printArrayState(copyArray);
            }
            copyArray[neighboringElementOnLeft + 1] = currentElement;
            if (isShowSteps)
                printArrayState(copyArray);
        }
        return swapCount;
    }
    const insertionSortSwap = insertionSortSwapCount(randomArray, false);
    console.log(insertionSortSwap);
    //=================================================================================================================================
    //Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
    // Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
    const demoArr = [3, 2, 4, 1, 5];
    console.log(`Bubble sort:`);
    bubbleSortSwapCount(demoArr, true);
    //-----------------------------------------
    console.log(`Cocktail sort:`);
    countCocktailSortSwaps(demoArr, true);
    //-----------------------------------------
    console.log(`Insertion sort:`);
    insertionSortSwapCount(demoArr, true);
    //=================================================================================================================================
    //Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
    const nameArray = ['Anna', 'Maria', 'Olga', 'Elena', 'Oksana'];
    function sortNamesAlphabetically(arrayText) {
        let changeStatus;
        const copyArray = arrayText.slice();
        let endIndex = copyArray.length;
        do {
            changeStatus = false;
            for (let i = 1; i < endIndex; i++) {
                if (copyArray[i - 1] > copyArray[i]) {
                    const temp = copyArray[i - 1];
                    copyArray[i - 1] = copyArray[i];
                    copyArray[i] = temp;
                    changeStatus = true;
                }
            }
            endIndex--;
        } while (changeStatus);
        return copyArray;
    }
    const sortedNames = sortNamesAlphabetically(nameArray);
    function binarySearch(sortedNames, searchEl) {
        let startIndex = 0;
        let endIndex = sortedNames.length - 1;
        while (startIndex <= endIndex) {
            const middleIndex = Math.floor((startIndex + endIndex) / 2);
            if (sortedNames[middleIndex] === searchEl)
                return middleIndex;
            if (sortedNames[middleIndex] < searchEl)
                startIndex = middleIndex + 1;
            else if (sortedNames[middleIndex] > searchEl)
                endIndex = middleIndex - 1;
        }
        return -1;
    }
    const searchName = 'Olga';
    const foundIndex = binarySearch(sortedNames, searchName);
    if (foundIndex === -1)
        console.log(`No ${searchName} name`);
    else
        console.log(`The name ${searchName} is located at index: ${foundIndex}`);
    //=================================================================================================================================
    //Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
    function sortNamesByLength(arrayText) {
        let changeStatus;
        const copyArray = arrayText.slice();
        let endIndex = copyArray.length;
        do {
            changeStatus = false;
            for (let i = 1; i < endIndex; i++) {
                if (copyArray[i - 1].length > copyArray[i].length) {
                    const temp = copyArray[i - 1];
                    copyArray[i - 1] = copyArray[i];
                    copyArray[i] = temp;
                    changeStatus = true;
                }
            }
            endIndex--;
        } while (changeStatus);
        return copyArray;
    }
    const namesSorted = sortNamesByLength(nameArray);
    function binarySearchByLength(sortedNames, searchElLength) {
        let startIndex = 0;
        let endIndex = sortedNames.length - 1;
        while (startIndex <= endIndex) {
            const middleIndex = Math.floor((startIndex + endIndex) / 2);
            if (sortedNames[middleIndex].length === searchElLength)
                return middleIndex;
            if (sortedNames[middleIndex].length < searchElLength)
                startIndex = middleIndex + 1;
            else if (sortedNames[middleIndex].length > searchElLength)
                endIndex = middleIndex - 1;
        }
        return -1;
    }
    const searchElLength = 5;
    const indexFound = binarySearchByLength(namesSorted, searchElLength);
    if (indexFound === -1)
        console.log(`No name with length ${searchElLength}`);
    else
        console.log(`Name with length ${searchElLength} is at index: ${indexFound}`);
    const rowsCount = 4;
    const columnsCount = 8;
    const minVal = 1;
    const maxVal = 7;
    const sundayNumber = 7;
    function getRandomNum(minVal, maxVal) {
        return (minVal + Math.floor(Math.random() * (maxVal - minVal + 1)));
    }
    function getRandomRow(columnsCount, minVal, maxVal) {
        return Array.from({ length: columnsCount }, () => getRandomNum(minVal, maxVal));
    }
    function getRandomTable(rowsCount, columnsCount, minVal, maxVal) {
        return Array.from({ length: rowsCount }, () => getRandomRow(columnsCount, minVal, maxVal));
    }
    const randomTable = getRandomTable(rowsCount, columnsCount, minVal, maxVal);
    console.table(randomTable);
    function countSundaysPerRow(randomTable, sundayNumber) {
        const sundaysCountPerRow = [];
        for (let row = 0; row < randomTable.length; row++) {
            let rowCount = 0;
            for (let col = 0; col < randomTable[row].length; col++) {
                if (randomTable[row][col] === sundayNumber) {
                    rowCount++;
                }
            }
            sundaysCountPerRow.push(rowCount);
        }
        return sundaysCountPerRow;
    }
    const sundaysPerRow = countSundaysPerRow(randomTable, sundayNumber);
    console.log(sundaysPerRow);
}
