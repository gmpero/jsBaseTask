/*
Написать функцию с колбеком, которая принимает число с колбеком 
и через секунду выводить в консоль число. 
Ограничения - для решения задачи setTimeout - можно использовать только один раз!
*/
numberLog = (number, callBack) => {
    setTimeout(() => {
    console.log(number);
    },1000)
    callBack();
}

callBack = () =>{
    console.log("Complete");
}

numberLog(5, callBack);


/*
Реализовать вывод в консоль от 1 до 10 через секунду. 
Вызываем так (только более большая вложенность):
*/
let i = 0;
recursion = () =>{
    i++;
    if (i>10) return;
    console.log(i);
    setTimeout(() => {
        recursion();
    }, 2000)   
}

recursion();