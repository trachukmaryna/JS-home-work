"use strict";
//Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
if (confirm('Почати?')) {
    //Функція знаходження середнього балу
    //-------------------------0  1  2  3  4  5
    let gradeList = [2, 5, 5, 4, 3, 4];
    function getAverageGrade(gradeArr) {
        let sum = 0;
        for (let i = 0; i < gradeArr.length; i++) {
            sum += gradeArr[i];
        }
        const average = sum / gradeArr.length;
        return average;
    }
    //Функція знаходження категорії учня
    function getGradeCategory(gradeArr) {
        let minGrade = gradeArr[0];
        for (let i = 1; i < gradeArr.length; i++) {
            if (gradeArr[i] < minGrade)
                minGrade = gradeArr[i];
        }
        if (minGrade === 2)
            return 'Двійочник';
        if (minGrade === 3)
            return 'Трійочник';
        if (minGrade === 4)
            return 'Хорошист';
        return 'Відмінник';
    }
    const average = getAverageGrade(gradeList);
    const category = getGradeCategory(gradeList);
    document.write(`
		Середній бал: ${average.toFixed(2)} <br>
		Категорія учня: ${category}
	`);
}
