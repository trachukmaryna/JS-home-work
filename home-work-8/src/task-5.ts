//Дано послідовність оцінок учня. Підрахувати кількість:
// 1) двійок
// 2)	кількість хороших оцінок(добре, відмінно)
// 3)	кількість оцінок, які нижче середнього.

if (confirm('Почати?')) {
	//-------------------------------0  1  2  3  4  5  6  7  8  9  10
	const studentGrades: number[] = [5, 5, 4, 3, 4, 3, 2, 2, 5, 5, 4]
	//---------------------------------------------------------------------------------------
	function getTargetGradeCount(grades: number[], targetGrade: number): number {
		let targetGradeCount: number = 0
		for (let i = 0; i < grades.length; i++) {
			if (grades[i] === targetGrade) targetGradeCount++
		}
		return targetGradeCount
	}

	const targetGrade: number = 2
	const countTargetGrade: number = getTargetGradeCount(studentGrades, targetGrade)

	document.write(`Кількість ${targetGrade}: ${countTargetGrade} шт.<br>`)
	//---------------------------------------------------------------------------------------
	function getGoodGradesCount(grades: number[], minGoodGrade: number): number {
		let goodGradesCount: number = 0
		for (let i = 0; i < grades.length; i++) {
			if (grades[i] >= minGoodGrade) goodGradesCount++
		}
		return goodGradesCount
	}

	const minGoodGrade: number = 4
	const goodGradesCount: number = getGoodGradesCount(studentGrades, minGoodGrade)

	document.write(`Кількість хороших оцінок не нижче ${minGoodGrade}: ${goodGradesCount} шт.<br>`)
	//---------------------------------------------------------------------------------------
	function getAverageGrade(grades: number[]): number {
		let sum: number = 0
		for (let i = 0; i < grades.length; i++) {
			sum += grades[i]
		}
		const averageGrade = sum / grades.length
		return averageGrade
	}

	function getBelowAverageGradesCount(grades: number[]): number {
		let belowAverageGradesCount: number = 0
		const averageGrade: number = getAverageGrade(grades)
		for (let j = 0; j < grades.length; j++) {
			if (grades[j] < averageGrade) belowAverageGradesCount++
		}
		return belowAverageGradesCount
	}

	const belowAverageGradesCount: number = getBelowAverageGradesCount(studentGrades)
	document.write(`Кількість оцінок, які нижче середнього: ${belowAverageGradesCount} шт.<br>`)
}    