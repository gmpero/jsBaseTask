/*
    Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], 
    и переносит первый элемент массива в конец 
    (например можно засунуть первый элемент в конец, 
    затем удалить первый элемент), 
    попробуй несколькими способами сделать, если догадаешься
*/
const arr = [1, 2, 3, 4, 5]


function swapArr(arr){
    //let timeVar = arr[0];
    arr.push(arr[0]);
    arr.shift();
    return arr;
}

console.log(swapArr(arr));