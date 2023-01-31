/*
    Вывести любой квадрат и кнопку "скрыть квадрат". 
    Когда мы нажимаем на скрыть, квадрат исчезает 
    и текст кнопки меняется на "показать квадрат" 
    и так можно кликать сколько угодно раз.

*/

const btn = document.querySelector("button");
squereBlock = document.querySelector("[class='square']")

btn.addEventListener('click', function(){
    if(btn.textContent == "Скрыть квадрат"){
        btn.textContent = "Показать квадрат";
        squereBlock.style.display = "none";
    }
    else{
        btn.textContent = "Скрыть квадрат";
        squereBlock.style.display = "block";
    }
});

