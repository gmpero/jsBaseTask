/*
Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. 
Кнопки: умножить, поделить, сложить, вычесть, вычислить. 
При нажатии на кнопки в любом порядке выводиться в отдельном блоке 
строка (5-4+3*2...) и при нажатии на кнопку посчитать, 
заменяем в блоке данную строку на результат её вычисления, 
при этом можно потом дальше вычислять с уже этим вычеслением.
*/
const input = document.querySelector("input");
const numbers = document.querySelectorAll('[class="number"]');

const operands = document.querySelectorAll('[class="operand"]') 
let result;

for(let number of numbers){
    number.addEventListener('click', function(){
        input.value += this.innerHTML;
        console.log(this.innerHTML);
    })    
}

for(let operand of operands){
    operand.addEventListener('click', function(){
    if(this.innerHTML ==="="){
        result = input.value;
        input.value = eval(result);
    }else if(this.innerHTML ==="del"){
        input.value = "";
    }
    else
        input.value+=this.innerHTML;
    })
}
