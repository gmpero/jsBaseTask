/*  
    Написать функцию, которая принимает массив сотрудников, 
    каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) 
    и возвращает массим, где каждый элемент представляет из себя строку 
    "Имя: Иван, возвраст: 23".
*/

const arr = [{name: 'Иван', age: 23}, {name: 'Валерия', age: 26}];

function logInfo(arr){
    const arrStr = [];
    for(let i = 0; i < arr.length; i++){
        arrStr.push(`Имя: ${arr[i].name}, возраст: ${arr[i].age}`)
    }
    return arrStr;
}

console.log(logInfo(arr));