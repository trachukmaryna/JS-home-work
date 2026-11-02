"use strict";
// Побудувати ялинку
{
    if (confirm('Почати?')) {
        for (let j = 0; j < 3; j++) {
            for (let row = 1; row <= 5; row++) {
                for (let col = 1; col <= row; col++) {
                    document.write(`o`);
                }
                document.write(`<br>`);
            }
        }
    }
}
