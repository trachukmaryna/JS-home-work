"use strict";
//Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if (confirm('Почати?')) {
    //----------------------------------0        1       2       3         4        5
    const studentNames = ['Марина', 'Сергій', 'Іван', 'Дар\'я', 'Матвій', 'Іван'];
    function getCountNameOccurrences(names, targetName) {
        let countStudentName = 0;
        for (let i = 0; i < names.length; i++) {
            if (names[i] === targetName)
                countStudentName++;
        }
        return countStudentName;
    }
    const targetName = 'Іван';
    const result = getCountNameOccurrences(studentNames, targetName);
    document.write(`Ім'я ${targetName} зустрічається: ${result} р.`);
}
