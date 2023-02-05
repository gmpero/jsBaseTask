/*
Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. 
Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. 
Оберните все это в промис. 
Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let a = new Promise((resolve, reject) => {
    let time = getRandomIntInclusive(1, 10);
    setTimeout(() => {
        console.log(time);
        if(time<6)
            resolve(console.log('Выполнено Успешно'));
        else
            reject(console.log("Не выполнено"));
    }, time*1000)  
})