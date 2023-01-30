/*
1. Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"
*/

let btnHi = document.querySelector('[class="btn__Hi"]');
btnHi.addEventListener('click', function(){
    alert("Привет Мир!");
});

