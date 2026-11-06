//Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А» (для отримання першої літери можна також звернутися до номера авто як string ніби як до масиву за номером 0 - autoNum[0] - перша літера);
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів

if (confirm('Почати?')) {
	//------------------------------------------0           1          2            3           4
	//--------------------------------------01234567    01234567    01234567    01234567    01234567
	const licensePlateNumbers: string[] = ['AE1234AB', 'KA5678CK', 'BC9999EF', 'AX0001HI', 'OD7777JK']
	//-------------------------------------------------------------------------------------------------------------------------
	function getCountLicensePlatesStartingWithTargetLetter(licensePlates: string[], targetLetter: string): number {
		let countLicensePlatesStartingWithTargetLetter: number = 0
		for (let i = 0; i < licensePlates.length; i++) {
			if (licensePlates[i][0] === targetLetter) countLicensePlatesStartingWithTargetLetter++
		}
		return countLicensePlatesStartingWithTargetLetter
	}
	const targetLetter: string = 'A'
	const matchingLicensePlatesCount: number = getCountLicensePlatesStartingWithTargetLetter(licensePlateNumbers, targetLetter)
	document.write(`Номерів автомобілів, які починаються на букву ${targetLetter}: ${matchingLicensePlatesCount}<br>`)
	//-------------------------------------------------------------------------------------------------------------------------
	function getCountLicensePlatesWithMatchingFirstAndLastLetters(licensePlates: string[]): number {
		let countLicensePlatesWithMatchingFirstAndLastLetters: number = 0
		for (let i = 0; i < licensePlates.length; i++) {
			const startLetter: string = licensePlates[i][0]
			const lastLetter: string = licensePlates[i][licensePlates[i].length - 1]
			if (startLetter === lastLetter) countLicensePlatesWithMatchingFirstAndLastLetters++
		}
		return countLicensePlatesWithMatchingFirstAndLastLetters
	}
	const matchingLicensePlatesWithMatchingFirstAndLastLetters = getCountLicensePlatesWithMatchingFirstAndLastLetters(licensePlateNumbers)
	document.write(`Номерів автомобілів, у яких перша і остання літери співпадають: ${matchingLicensePlatesWithMatchingFirstAndLastLetters}<br>`)
	//-------------------------------------------------------------------------------------------------------------------------
	function getCountLicensePlatesWithMoreThan5Characters(licensePlates: string[], characterCount: number): number {
		let countLicensePlatesWithMoreThan5Characters: number = 0
		for (let i = 0; i < licensePlates.length; i++) {
			if (licensePlates[i].length > characterCount) countLicensePlatesWithMoreThan5Characters++
		}
		return countLicensePlatesWithMoreThan5Characters
	}
	const characterCount = 5
	const matchingLicensePlatesWithMoreThan5Characters = getCountLicensePlatesWithMoreThan5Characters(licensePlateNumbers, characterCount)
	document.write(`Номерів автомобілів, у яких номери складаються з більше ніш ${characterCount} символів: ${matchingLicensePlatesWithMoreThan5Characters}<br>`)
}