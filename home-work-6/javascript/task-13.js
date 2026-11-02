"use strict";
//Написати програму виведення на екран кожного символу латинського алфавіту та поруч з кожним з них символу, що передує йому та що слідує за ним.
if (confirm('Почати?')) {
    for (let letterCode = 65; letterCode <= 90; letterCode++) {
        let previousLetter = '';
        let nextLetter = '';
        if (letterCode === 65) {
            previousLetter = "&nbsp;";
        }
        else
            previousLetter = String.fromCharCode(letterCode - 1);
        if (letterCode === 90) {
            nextLetter = "&nbsp;";
        }
        else
            nextLetter = String.fromCharCode(letterCode + 1);
        document.write(`${previousLetter} ${String.fromCharCode(letterCode)} ${nextLetter}<br>`);
    }
}
