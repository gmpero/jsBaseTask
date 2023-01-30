/*
Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, 
выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".
*/

fieldInput = document.querySelector('[type="text"]');
btn = document.querySelector('[class="text__input"]');

btn.addEventListener('click', function(){
    if(fieldInput.value == ""){
        console.log("Вы ничего не ввели!"); 
        alert("Вы ничего не ввели!");
    }
    else{
        console.log(fieldInput.value);
        alert(`Вы ввели текст: ${fieldInput.value}`);
    }
});