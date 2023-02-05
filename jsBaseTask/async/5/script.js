/*
Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. 
Сделайте так, чтобы каждый последующий промис через 3 секунды 
возводил в квадрат результат предыдущего промиса. 
После окончания манипуляций выведите число алертом на экран.
*/

let a = new Promise((resolve, reject) => {
    //console.log(1);
    setTimeout(()=>resolve(2), 3000);
}).then(result=>new Promise((resolve, reject) => {
    setTimeout(()=>resolve(result*result), 3000);
})).then(result=>new Promise((resolve, reject) => {
    setTimeout(()=>resolve(result*result), 3000);
})).then(num=>alert(num))

//alert(a.finally);