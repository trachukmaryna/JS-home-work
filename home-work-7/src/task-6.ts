//Задача 5. Створити окремі функції, які переводять:
//Сантиметри у дюйми;
//Кілограми у фунти;
//Кілометри у милі.


if (confirm('Почати?')) {
	//Функція введення і перевірки
	function readPositiveNumber(message: string): number {
		const value: number = parseFloat(prompt(`Введіть ${message}`) ?? '')
		if (!isFinite(value) || value < 0) throw new Error("Некоректне число")
		return value
	}
	//----------------------------------------------------------------------------
	const centimeters = readPositiveNumber('сантиметри')
	function convertCentimetersToInches(cm: number): number {
		const cmPerInch = 2.54
		const result: number = cm / cmPerInch
		return result
	}
	const inches: number = convertCentimetersToInches(centimeters)
	document.write(`В ${centimeters} см: ${inches.toFixed(2)} дюймів <br>`)
	//----------------------------------------------------------------------------
	const kilograms = readPositiveNumber('кілограми')
	function convertKilogramsToPounds(kg: number): number {
		const poundsPerKg = 2.20462
		const result: number = kg * poundsPerKg
		return result
	}
	const pounds: number = convertKilogramsToPounds(kilograms)
	document.write(`В ${kilograms} кг: ${pounds.toFixed(2)} фунтів <br>`)
	//----------------------------------------------------------------------------
	const kilometers = readPositiveNumber('кілометри')
	function convertKilometersToMiles(km: number): number {
		const milesPerKm = 0.621371
		const result: number = km * milesPerKm
		return result
	}
	const miles: number = convertKilometersToMiles(kilometers)
	document.write(`В ${kilometers} км: ${miles.toFixed(2)} миль <br>`)
}