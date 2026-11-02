"use strict";
// Вивести на екран
// 1 1
// 2 1 2
// 3 1 2 3
// 4 1 2 3 4
// …
// i 1 2 3 ..i
// 23 1 2 3 .. 22 23
if (confirm('Почати?')) {
    for (let i = 1; i <= 23; i++) {
        document.write(`${i} `);
        for (let j = 1; j <= i; j++) {
            document.write(`${j} `);
        }
        document.write(`<br>`);
    }
}
