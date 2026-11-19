"use strict";
// Задача 3. Морський бій.
// Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів.
// Користувач стріляє вказуючи координати.
// Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
if (confirm('Shall we begin??')) {
    const fieldSize = 6;
    const countShip = 5;
    const shellsCount = 3;
    if (countShip > fieldSize * fieldSize)
        throw new Error("Incorrect data");
    // 1. Створення поля
    function createTable(fieldSize) {
        return Array.from({ length: fieldSize }, () => new Array(fieldSize).fill(0));
    }
    const table = createTable(fieldSize);
    console.table(table);
    //---------------------------------------------------------------------------------------------------
    // 2. Розстановка кораблів
    function placeShips(table, countShip) {
        let count = 0;
        while (count < countShip) {
            const randomRow = Math.floor(Math.random() * table.length);
            const randomCol = Math.floor(Math.random() * table[0].length);
            if (table[randomRow][randomCol] === 0) {
                table[randomRow][randomCol] = 1;
                count++;
            }
        }
        return table;
    }
    const place = placeShips(table, countShip);
    console.table(place);
    //---------------------------------------------------------------------------------------------------
    // 3. Постріл
    function makeShot(place, row, col) {
        let shot = true;
        if (place[row][col] === 1) {
            place[row][col] = 0; //влучив
        }
        else
            shot = false; //не влучив
        return shot;
    }
    //---------------------------------------------------------------------------------------------------
    // 4. Гра
    let sunkShipsCount = 0;
    let usedShellsCount = 0;
    while (sunkShipsCount < countShip && usedShellsCount < shellsCount) {
        const numOfRow = parseInt(prompt('Enter the line number') ?? '');
        const numOfCol = parseInt(prompt('Enter the column number') ?? '');
        if (!isFinite(numOfRow) || !isFinite(numOfCol) || numOfRow > fieldSize || numOfCol > fieldSize || numOfRow < 1 || numOfCol < 1) {
            alert('There is no such cell.');
            continue;
        }
        const rowIndex = numOfRow - 1;
        const colIndex = numOfCol - 1;
        const isHit = makeShot(place, rowIndex, colIndex);
        usedShellsCount++;
        if (isHit) {
            sunkShipsCount++;
            alert('Hit');
        }
        else
            alert('Miss');
    }
    if (sunkShipsCount === countShip)
        alert('Victory');
    else
        alert(`The shells ran out. Ships remaining: ${countShip - sunkShipsCount}`);
}
