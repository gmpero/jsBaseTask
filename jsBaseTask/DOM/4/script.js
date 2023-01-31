/*
    Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку 
    инпуты меняются своим введеным текстом
*/



//const inputOne = document.querySelectorAll("input[0]");
//const inputTwo = document.querySelectorAll("input[1]");
//console.log(inputs); 

//console.log(inputOne);
/*
function swapEl(val1, val2){
    
}
*/

inputs = document.querySelectorAll("input");
btn = document.querySelector("button");


btn.addEventListener('click', function(){
    inputOne = inputs[0].value;
    inputs[0].value = inputs[1].value;
    inputs[1].value = inputOne;
});



