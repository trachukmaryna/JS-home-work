"use strict";
//Вивести на екран 8 кнопок з написом “Hello”.
{
    if (confirm('Почати?')) {
        for (let button = 1; button <= 8; button++) {
            document.write(`
				<button type="button" style="border: 2px ; background-color: blue; color:white; border-radius: 10px; padding-block: 5px; padding-inline: 15px;cursor: pointer;">Hello!</button>
				`);
        }
    }
    else {
        throw new Error("Скасовано");
    }
}
