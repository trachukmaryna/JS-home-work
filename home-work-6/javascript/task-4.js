"use strict";
//Відобразити трикутник за допомогою символів «о»
{
    if (confirm('Почати?')) {
        document.write(`<div style="display:inline-block; text-align: center">`);
        for (let row = 1; row <= 7; row++) {
            document.write(`<br>`);
            for (let col = 1; col <= row; col++) {
                document.write(`o`);
            }
        }
        document.write(`</div>`);
    }
}
