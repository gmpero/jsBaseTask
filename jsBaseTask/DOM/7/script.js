/*
Выводим красный квадрат, при наведении на него он становиться зеленым, 
а когда уводим курсор от него, обратно красным. */

const squere = document.querySelector("[class='square']");


squere.addEventListener("mouseover", function(){
    squere.style.backgroundColor = 'red';
});

squere.addEventListener("mouseout", function(){
    squere.style.backgroundColor = 'rgb(175, 175, 253)';
})
