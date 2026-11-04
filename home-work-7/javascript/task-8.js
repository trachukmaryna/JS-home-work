"use strict";
//Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
if (confirm('Почати?')) {
    function getImage(img1, img2, img3, img4) {
        const minImg = 1;
        const maxImg = 4;
        const randomImg = Math.floor(Math.random() * (maxImg - minImg + 1) + minImg);
        let resultSrc = '';
        switch (randomImg) {
            case 1:
                resultSrc = img1;
                break;
            case 2:
                resultSrc = img2;
                break;
            case 3:
                resultSrc = img3;
                break;
            case 4:
                resultSrc = img4;
                break;
            default: throw new Error("Немає такої картинки");
        }
        return resultSrc;
    }
    let src = getImage('../img/cloud.svg', '../img/moon.svg', '../img/star.svg', '../img/sun.svg');
    document.write(`<img src="${src}">`);
}
