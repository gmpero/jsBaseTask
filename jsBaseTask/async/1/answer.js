/*
Реализовать вывод в консоль от 1 до 10 через секунду. 
Вызываем так (только более большая вложенность):
*/
let i = 1;
recursion = (callBack) => {
    console.log(i);
    i++;
    if(i>10)return;
    setTimeout(() => {
        callBack(callBack);
    }, 1000)  
}

recursion(recursion);
