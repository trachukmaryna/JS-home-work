//	Створити функцію, яка виводить банер. <br>
//	У функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення. <br>
//	Тег img повине знаходитись у середині тега a: <a><img src=”шлях”> </a><br>

if (confirm('Почати?')) {
	function showBanner(img: string, title: string, link: string) {
		document.write(`
		<a href="${link}">
			<img src="${img}" alt="${title}">
			<h1>${title}</h1>
		</a>
	`)
	}
	showBanner('../img/background.jpg', 'Title', 'https://www.google.com/')
}