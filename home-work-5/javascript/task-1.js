"use strict";
// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
{
    if (confirm('Почати?')) {
        let evenNumber = 0;
        let oddNumber = 0;
        const minNumber = 1;
        const maxNumber = 1000;
        let result;
        for (let i = 1; i <= 100; i++) {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            if (randomNumber % 2 === 0)
                evenNumber++;
            else
                oddNumber++;
        }
        if (evenNumber > oddNumber)
            result = 'Більше парних';
        else if (oddNumber > evenNumber)
            result = 'Більше непарних';
        else
            result = 'Однакова кількість';
        document.write(`Парних чисел ${evenNumber}, непарних чисел ${oddNumber}. Результат підрахунку ${result} `);
    }
    else {
        throw new Error("Скасовано");
    }
}
