/*
Выводим кнопку с текстом "Заполнить" и незаполненный инпут, 
при клике на кнопку, заполняем инпут текстом "test@email.ru"
*/

formEmail = document.querySelector('[type = "email"]');
btn = document.querySelector('[class="btn__input"]')


btn.addEventListener("click", function(){
    formEmail.value = "test@email.ru";
});