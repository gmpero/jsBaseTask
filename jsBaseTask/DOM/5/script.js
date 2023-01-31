//
//  Выводим две кнопки "заблокировать" и "разблокировать" и инпут. 
//  Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
//

btnOne = document.getElementById("0");
btnTwo = document.getElementById("1");

inputDOM = document.querySelector("input");

btnOne.addEventListener('click', function(){
    inputDOM.disabled = true;
    btnOne.disabled = true;
});

btnTwo.addEventListener('click', function(){
    inputDOM.disabled = false;
    btnOne.disabled = false;
})
//console.log();