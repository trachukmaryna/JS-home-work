//Каса. Користувачу повідомляють суму, яку йому треба сплатити.
//Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів
// (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 

{
	if (confirm('Почнемо?')) {
		const minSum: number = 50
		const maxSum: number = 200000
		const randomSum: number = Math.floor(Math.random() * (maxSum - minSum + 1)) + minSum
		let countAmount: number = 0
		alert(`Сума покупки складає ${randomSum}`)
		do {
			const enteredAmount = parseFloat(prompt(`Введіть суму грошей`) ?? '')
			if (!isFinite(enteredAmount) || enteredAmount < 0) {
				alert('Некоретна сума')
				continue
			}
			else {
				countAmount += enteredAmount
				if (randomSum > countAmount) {
					let odds = randomSum - countAmount
					alert(`Коштів недостатньо. Залишилось внести ${odds} грн`)
				}
			}
		} while (countAmount < randomSum)
		if (countAmount > randomSum) {
			const rest = countAmount - randomSum
			alert(`Покупка сплачена в повному обсязі! Ваша решта ${rest} грн`)
		} else alert('Покупка сплачена в повному обсязі!')
	}
	else throw new Error("Скасовано")
}
