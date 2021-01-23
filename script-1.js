//Задача: Показывать модальное окно со скидкой через 3 секунды после открытия
//страницы
let modalWindow = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".modal-close-btn");

window.onload = function () {    //событие открыти модального окна после загрузки страницы
    let modalOpen = function () {
        modalWindow.classList.add('modal-open');
    };

    /*let timer = */setTimeout(modalOpen, 1000); //если нигде больше не используем, можно не обозначать timer
}

modalCloseBtn.onclick = function () {//событие нажатие на кнопкку
    modalWindow.classList.remove('modal-open');
}


//Пример: показывать текущее время на странице

let timeElement = document.querySelector(".time");

/*let date = new Date();
let time = date.toLocaleTimeString();
timeElement.textContent = date;
timeElement.textContent = time;*/

let getTime = function () {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.textContent = time;
}
getTime();
setInterval(getTime, 1000);


//анимация

let animButton = document.querySelector(".animate");
animButton.onclick = function () {
    //this.style.color = 'red';
    //this.style.transform = 'scale(1.5)';

    //this.classList.toggle('animate-big');
    this.classList.add('animate-big');
}
animButton.addEventListener('transitionend', function () { //слушатель событий
    this.classList.remove('animate-big');
});